import { prisma } from "../services/prisma";

export const createFundo = async (data) => {
  const { fundo } = data;

  const fundoCriado = await prisma.fundo.create({
    data: {
      cnpj: fundo.cnpj,
      razaoSocial: fundo.razaoSocial,
      operacoes: {
        create: fundo.operacoes.map((operacao) => ({
          tipo: operacao.tipo,
          date: operacao.date,
          cotas: operacao.cotas,
          valorCota: operacao.valorCota,
        })),
      },
    },
  });

  return fundoCriado;
};


export const getAll = async () => {
    const fundos = await prisma.fundo.findMany({});
    return fundos;
};

export const getById = async (razaoSocial, cnpj) => {
    const fundo = await prisma.fundo.findUnique({
        where:{
            razaoSocial,
            cnpj
        }
    })
    return fundo;
}

export const updateFundo = async (id, data) => {
    const { fundo } = data;
    const fundoAtualizado = await prisma.fundo.update({
        where:{
            id
        },
        data: {
          cnpj: fundo.cnpj,
          razaoSocial: fundo.razaoSocial,
          operacoes: {
            create: fundo.operacoes.map((operacao) => ({
              tipo: operacao.tipo,
              date: operacao.date,
              cotas: operacao.cotas,
              valorCota: operacao.valorCota,
            })),
          },
        }
      });
    return fundoAtualizado;
}

export const deleteFundo = async (id) => {
    // Excluir operações associadas ao fundo
    await prisma.operacao.deleteMany({
      where: {
        fundoId: id,
      },
    });
  
    // Excluir o fundo após a exclusão das operações
    await prisma.fundo.delete({
      where: {
        id,
      },
    });
  
    return;
  };
