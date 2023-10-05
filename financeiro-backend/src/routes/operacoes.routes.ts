import { getAllOperacoes, getUniqueOperacao, deleteOperacaoByID, updateOperacaobyID } from "../controllers/operacao.controller";

const operacoesRoutes = app => {
    app.get("/operacoes", getAllOperacoes)
    app.get("/operacoes/:id", getUniqueOperacao)
    app.delete("/operacoes/:id", deleteOperacaoByID)
    app.put("/operacoes/:id", updateOperacaobyID)
}



export default operacoesRoutes;