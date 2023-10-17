import fundoRoutes from "./fundo.routes";
import operacoesRoutes from "./operacoes.routes";
import consultaRoutes from "./consulta.routes";

const routes = (app) => {
    fundoRoutes(app);
    operacoesRoutes(app);
    consultaRoutes(app);
};


export default routes;