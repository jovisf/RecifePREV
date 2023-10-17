import { consulta, updateCota, createCota, getCotaByDate, deleteCota } from "../repositories/consulta.repository";

export const getConsulta = async(req,res) => {
  try{
      const operacao = await consulta(Number(req.params.fundoId));
      res.status(200).send(operacao);
  } catch(e){
      console.error("Erro ao realizar consulta: ", e);
      res.status(400).send(e);
  }
}

export const getCota = async(req,res) => {
  try{
    const cota = await getCotaByDate(req.param.dt_comptc)
    res.status(200).send(cota)
  } catch (e){
    console.error("Erro ao realizar consulta: ", e);
      res.status(400).send(e);
  }
}

export const create = async (req, res) => {
  try {
      const cota = await createCota(req.body);
      res.status(200).send(cota);
  } catch (e) {
      console.error("Erro ao criar fundo:", e);
      res.status(400).send(e);
  }
};

export const update = async(req,res) => {
  try {
      const fundo = await updateCota(Number(req.params.id), req.body);
      res.status(200).send(fundo);
  } catch (e) {
      console.error("Erro ao criar fundo:", e);
      res.status(400).send(e);
  }
}

export const remove = async(req,res) => {
  try {
      const cota = await deleteCota(Number(req.params.id));
      res.status(200).send(cota);
  } catch (e) {
      console.error("Erro ao deletar fundo:", e);
      res.status(400).send(e);
  }
}