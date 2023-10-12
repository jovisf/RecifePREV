import { consulta } from "../repositories/consulta.repository";

export const getConsulta = async(req,res) => {
  try{
      const operacao = await consulta(Number(req.params.fundoId));
      res.status(200).send(operacao);
  } catch(e){
      console.error("Erro ao realizar consulta: ", e);
      res.status(400).send(e);
  }
}