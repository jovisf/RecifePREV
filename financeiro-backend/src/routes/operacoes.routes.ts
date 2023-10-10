import { getAllOperacoes, getUniqueOperacao, deleteOperacaoByID, updateOperacaobyID, getConsulta } from "../controllers/operacao.controller";

const operacoesRoutes = app => {
    app.get("/operacoes", getAllOperacoes)
    app.get("/operacoes/:fundoId", getUniqueOperacao)
    app.delete("/operacoes/:id", deleteOperacaoByID)
    app.put("/operacoes/:id", updateOperacaobyID)
    app.get("/consulta/:fundoId", getConsulta) //lembrar de fazer uma propria estrutura para consulta depois
}



export default operacoesRoutes;