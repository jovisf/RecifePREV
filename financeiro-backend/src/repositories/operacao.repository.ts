import { prisma } from "../services/prisma";

export const getOperacoes = async () => {
    const operacoes = await prisma.operacao.findMany({});
    return operacoes;
};

export const getOperacoesByID = async (id) => {
    const operacao = await prisma.operacao.findUnique({
        where:{
            id
        }
    })
    return operacao;
};

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
          data: data.data,
          cotas: data.cotas,
          valorCota: data.valorCota,
        }
      });
    return operacaoAtualizada;
}