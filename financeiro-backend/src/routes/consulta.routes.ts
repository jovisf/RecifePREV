import { getConsulta, create, update, getCota, remove  } from "../controllers/consulta.controller";

const consultaRoutes = app => {
    app.get("/consulta/:fundoId", getConsulta)
    app.post("/cota", create);
    app.get("/cota/:id", getCota);
    app.put("/cota/:id", update)
    app.delete("/cota/:id", remove)
}



export default consultaRoutes;