import fundoRoutes from "./fundo.routes";
import operacoesRoutes from "./operacoes.routes";

const routes = (app) => {
    fundoRoutes(app);
    operacoesRoutes(app);
};


export default routes;