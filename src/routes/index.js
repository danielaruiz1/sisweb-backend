import { Router } from "express"; // importamos la funcion Router de la libreria express
// el enrutador recibe el request, revisa que la direccion que se le manda la tenga, define la api
// las direcciones del api son endpoints
// cuando si tiene la ruta, se lo manda al controlador, quien controla la logica de la app
// cuando no encuentra la direccion, manda el error 404

import orderRoutes from "./orderRoutes";
import userRoutes from "./userRoutes";
import productRoutes from "./productRoutes"; // productRoutes es un modulo de js que tiene todas las direcciones de enrutamiento

const apiRouter = Router();
apiRouter.use("/product", productRoutes);
apiRouter.use("/order", orderRoutes);
apiRouter.use("/user", userRoutes);

apiRouter.get("/", (req, res) => {
  // '/' es la direccion raiz, get devuelve la info solicitada
  // cuandose llame a la direccion raiz, se imprime hello world
  // req es la request del cliente, res es el response que se manda al front
  res.send("Hello Woooooorld!");
});
export default apiRouter;
