import { getOperacoes, getOperacoesByfundoID, deleteOperacao, updateOperacao, addOperacaoByFundoID} from "../repositories/operacao.repository";

export const getAllOperacoes = async (req, res) => {
    try{
        const operacoes = await getOperacoes();
        res.status(200).send(operacoes);
    } catch (e) {
        res.status(400).send(e);
    }
    
};

export const getUniqueOperacao = async (req,res) => {
    try{
        const operacao = await getOperacoesByfundoID(Number(req.params.fundoId))
        res.status(200).send(operacao)
    } catch (e){
        console.log(e)
        res.status(400).send(e)
    }
};

export const deleteOperacaoByID = async (req,res) => {
    try{
        const operacao = await deleteOperacao(Number(req.params.id))
        res.status(200).send(operacao)
    } catch (e){
        console.log("Não foi possivel excluir a operação")
        res.status(400).send(e)
    }
};


export const updateOperacaobyID = async(req,res) => {
    try {
        const operacao = await updateOperacao(Number(req.params.id), req.body);
        res.status(200).send(operacao);
    } catch (e) {
        console.error("Erro ao atualizar operação:", e);
        res.status(400).send(e);
    }
}

export const createOperacaobyFundoID = async(req,res) => {
    try {
        const operacao = await addOperacaoByFundoID(Number(req.params.fundoId), req.body)
        res.status(200).send(operacao);
    } catch (e) {
        console.error("Erro ao criar operação: ", e);
        res.status(400).send(e);
    }
}