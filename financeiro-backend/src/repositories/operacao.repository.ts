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

export const getOperacaofeita = async (fundoId) => {
  const operacoes = await prisma.operacao.findMany({
    where: {
        fundoId
    }
  });

  const somaValorCota = operacoes.reduce((soma, operacao) => soma + operacao.valorCota, 0);

  console.log(`A soma dos valores de 'valorCota' para o fundo ${fundoId} é: ${somaValorCota}`);

  
}