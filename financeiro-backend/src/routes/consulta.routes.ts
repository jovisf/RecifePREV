import { getConsulta } from "../controllers/consulta.controller";

const fundoRoutes = app => {
    app.get("/consulta/:fundoId", getConsulta)
}



export default fundoRoutes;