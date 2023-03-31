import { Router } from "express";
import {
  createOrder,
  getAllOrders,
  getOrderById,
  deleteOrder,
  updateOrder,
} from "../controlers/orderControler";

const orderRouter = Router();

orderRouter.get("/", getAllOrders);
orderRouter.get("/:id", getOrderById);
orderRouter.post("/", createOrder);
orderRouter.patch("/:id", updateOrder);
orderRouter.delete("/", deleteOrder);

/* orderRouter.get("/", (req, res) => {
  // regresa los orderos, seria la direccion http://localhost:8000/ordero
  res.send("Get a list of orders");
});
orderRouter.get("/:id", (req, res) => {
  // si se le manda in id, le manda un ordero
  res.send(`Get the order ${req.params.id}`);
});
orderRouter.post("/", (req, res) => {
  // si se le pasa por post el id, esta encriptadas las caracteristicas del ordero
  res.send(`Create a new order with ID: ${req.body.id}`);
});
orderRouter.patch("/:id", (req, res) => {
  // "", en el cuerpo estan los elementos por cambiar del ordero
  res.send(`Update the order ${req.params.id} with the values of ${req.body.name}, ${req.body.price} and
${req.body.qty}`);
});
orderRouter.delete("/", (req, res) => {
  // "", se borra ese ordero
  res.send(`Deleting the order ${req.body.id}`);
}); */
export default orderRouter; // devuelve todas las direcciones en un paquete
