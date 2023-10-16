import { prisma } from "../services/prisma";

export const getOperacoes = async () => {
    const operacoes = await prisma.operacao.findMany({});
    return operacoes;
};

export const getOperacoesByfundoID = async (fundoId) => {
  const operacoes = await prisma.operacao.findMany({
      where: {
          fundoId
      }
  });
  return operacoes;
};


export const addOperacaoByFundoID = async (fundoId, novaOperacao) => {
  const operacaoCriada = await prisma.operacao.create({
    data: {
        tipo: novaOperacao.tipo,
        date: novaOperacao.date,
        cotas: novaOperacao.cotas,
        valorCota: novaOperacao.valorCota,
        fundoId: novaOperacao.fundoId || fundoId,
    },
  });
  return operacaoCriada;
}

export const deleteOperacao = async (id) => {
  
    // Excluir o fundo após a exclusão das operações
    await prisma.operacao.delete({
      where: {
        id,
      },
    });
  
    return;
};

export const updateOperacao = async (id, data) => {
    const operacaoAtualizada = await prisma.operacao.update({
        where:{
            id
        },
        data: {
          tipo: data.tipo,
          date: data.data,
          cotas: data.cotas,
          valorCota: data.valorCota,
        }
      });
    return operacaoAtualizada;
}