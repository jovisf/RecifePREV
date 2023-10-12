import { getAllOperacoes, getUniqueOperacao, deleteOperacaoByID, updateOperacaobyID, createOperacaobyFundoID } from "../controllers/operacao.controller";

const operacoesRoutes = app => {
    app.get("/operacoes", getAllOperacoes)
    app.get("/operacoes/:fundoId", getUniqueOperacao)
    app.delete("/operacoes/:id", deleteOperacaoByID)
    app.put("/operacoes/:id", updateOperacaobyID)
    app.post("/operacoes/:fundoId", createOperacaobyFundoID)
}



export default operacoesRoutes;