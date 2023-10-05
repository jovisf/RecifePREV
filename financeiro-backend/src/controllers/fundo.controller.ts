import { createFundo, getAll, getById, updateFundo, deleteFundo } from "../repositories/fundo.repository";


export const create = async (req, res) => {
    try {
        const fundo = await createFundo(req.body);
        res.status(200).send(fundo);
    } catch (e) {
        console.error("Erro ao criar fundo:", e);
        res.status(400).send(e);
    }
};

export const get = async (req, res) => {
    try{
        const fundos = await getAll();
        res.status(200).send(fundos);
    } catch (e) {
        res.status(400).send(e);
    }
    
};


export const getbyid = async(req,res) => {
    try{
        const fundo = await getById(Number(req.params.id));
        res.status(200).send(fundo)
    } catch (e) {
        res.status(400).send(e);
    }
}

export const update = async(req,res) => {
    try {
        const fundo = await updateFundo(Number(req.params.id), req.body);
        res.status(200).send(fundo);
    } catch (e) {
        console.error("Erro ao criar fundo:", e);
        res.status(400).send(e);
    }
}

export const remove = async(req,res) => {
    try {
        const fundo = await deleteFundo(Number(req.params.id));
        res.status(200).send(fundo);
    } catch (e) {
        console.error("Erro ao deletar fundo:", e);
        res.status(400).send(e);
    }
}