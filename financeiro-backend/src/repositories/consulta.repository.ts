import { prisma } from "../services/prisma";


export const createCota = async (data) => {

  const cotaCriada = await prisma.cota.create(
    {
      data: {
        tp_fundo: data.tp_fundo,
        cnpj_fundo: data.cnpj_fundo,
        dt_comptc: data.dt_comptc,
        vl_quota: data.vl_quota,
        nr_cotst: data.nr_cotst
      }
    }
  )

  return cotaCriada;
};

export const getCotaByDate = async (dt_comptc) => {
  const cota = await prisma.cota.findMany({
      where:{
        dt_comptc
      }
  })
  return cota;
}

export const updateCota= async (id, data) => {
  const operacaoAtualizada = await prisma.cota.update({
      where:{
          id
      },
      data: {
        tp_fundo: data.tp_fundo,
        cnpj_fundo: data.cnpj_fundo,
        dt_comptc: data.dt_comptc,
        vl_quota: data.vl_quota,
        nr_cotst: data.nr_cotst
      }
    });
  return operacaoAtualizada;
}

export const consulta = async (fundoId) => {
    const operacoesCompra = await prisma.operacao.findMany({
      where: {
          fundoId,
          tipo: "Compra"
      }
    });
  
    const operacoesVenda = await prisma.operacao.findMany({
      where: {
          fundoId,
          tipo: "Venda"
      }
    });

    const ultimaOperacao = await prisma.operacao.findMany({
      where: {
        fundoId,
        tipo: "Compra"
      },
      orderBy: {
        id: 'desc' // Substitua 'data' pelo campo apropriado que representa a ordem das operações
      },
      take: 1 
    });
    

    const somaCotasCompra = operacoesCompra.reduce((soma, operacao) => soma + (operacao.valorCota * operacao.cotas), 0);
    const quantidadeCotasCompradas = operacoesCompra.reduce((soma, operacao) => soma + operacao.cotas, 0);
    const quantidadeCotasVendidas = operacoesVenda.reduce((soma, operacao) => soma + operacao.cotas, 0);
    const somaCotasVenda = operacoesVenda.reduce((soma, operacao) => soma + (operacao.valorCota * operacao.cotas), 0);
    const precoMedio = (somaCotasCompra)/(quantidadeCotasCompradas)
    const numeroCotas = quantidadeCotasCompradas - quantidadeCotasVendidas
    const valorCotaUltimaOperacao = ultimaOperacao[0].valorCota;
    const retornoOp = (valorCotaUltimaOperacao/precoMedio) - 1
    const saldo = valorCotaUltimaOperacao * numeroCotas
    
  
  
    const infos = {
      quantidadeCotas: numeroCotas,
      valorMedio: precoMedio,
      valorUnitario: valorCotaUltimaOperacao,
      retorno: retornoOp,
      saldo: saldo
    }

    return infos;
  }

export const deleteCota = async (id) => {
  
    // Excluir o fundo após a exclusão das operações
    await prisma.cota.delete({
      where: {
        id,
      },
    });
  
    return;
};
