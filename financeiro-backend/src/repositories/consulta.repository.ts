import { prisma } from "../services/prisma";

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
    


    const somaCotasCompra = operacoesCompra.reduce((soma, operacao) => soma + (operacao.valorCota * operacao.cotas), 0);
    const quantidadeCotasCompradas = operacoesCompra.reduce((soma, operacao) => soma + operacao.cotas, 0);
    const quantidadeCotasVendidas = operacoesVenda.reduce((soma, operacao) => soma + operacao.cotas, 0);
    const somaCotasVenda = operacoesVenda.reduce((soma, operacao) => soma + (operacao.valorCota * operacao.cotas), 0);
    const precoMedio = (somaCotasCompra + somaCotasVenda)/(quantidadeCotasCompradas + quantidadeCotasVendidas)
    const numeroCotas = quantidadeCotasCompradas - quantidadeCotasVendidas
  
    console.log(`A soma dos valores de 'valorCota' para o fundo ${fundoId} é: ${somaCotasCompra}`);
    console.log(`A soma dos valores das cotas vendidas do ${fundoId} é: ${somaCotasVenda}`);
    console.log(`A quantidade de cotas compradas fundo ${fundoId} é: ${quantidadeCotasCompradas}`);
    console.log(`O preço médio das cotas compradas e vendidas foi de ${precoMedio} `)
    console.log(`A quantidade de cotas é: ${numeroCotas}`)
  
    
  }