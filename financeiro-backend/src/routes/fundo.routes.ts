import { create, get, getbyid, update, remove } from "../controllers/fundo.controller";

const fundoRoutes = app => {
    app.post("/fundo", create);
    app.get("/fundo", get)
    app.get("/fundo/:razaoSocial/:cnpj", getbyid)
    app.put("/fundo/:id", update)
    app.delete("/fundo/:id", remove)
}



export default fundoRoutes;