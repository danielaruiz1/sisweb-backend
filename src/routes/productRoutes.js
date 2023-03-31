import { Router } from "express";
import {
  createProduct,
  getAllProducts,
  getProductById,
  deleteProduct,
  updateProduct,
} from "../controlers/productControler";

const productRouter = Router();

productRouter.get("/", getAllProducts);
productRouter.get("/:id", getProductById);
productRouter.post("/", createProduct);
productRouter.patch("/:id", updateProduct);
productRouter.delete("/", deleteProduct);

/* productRouter.get("/", (req, res) => {
  // regresa los productos, seria la direccion http://localhost:8000/producto
  res.send("Get a list of products");
});
productRouter.get("/:id", (req, res) => {
  // si se le manda in id, le manda un producto
  res.send(`Get the product ${req.params.id}`);
});
productRouter.post("/", (req, res) => {
  // si se le pasa por post el id, esta encriptadas las caracteristicas del producto
  res.send(`Create a new product with ID: ${req.body.id}`);
});
productRouter.patch("/:id", (req, res) => {
  // "", en el cuerpo estan los elementos por cambiar del producto
  res.send(`Update the product ${req.params.id} with the values of ${req.body.name}, ${req.body.price} and
${req.body.qty}`);
});
productRouter.delete("/", (req, res) => {
  // "", se borra ese producto
  res.send(`Deleting the product ${req.body.id}`);
}); */
export default productRouter; // devuelve todas las direcciones en un paquete
