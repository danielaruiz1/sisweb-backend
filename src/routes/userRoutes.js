import { Router } from "express";
import {
  createUser,
  getAllUsers,
  getUserById,
  deleteUser,
  updateUser,
} from "../controlers/userControler";

const userRouter = Router();

userRouter.get("/", getAllUsers);
userRouter.get("/:id", getUserById);
userRouter.post("/", createUser);
userRouter.patch("/:id", updateUser);
userRouter.delete("/", deleteUser);

/* userRouter.get("/", (req, res) => {
  // regresa los useros, seria la direccion http://localhost:8000/usero
  res.send("Get a list of users");
});
userRouter.get("/:id", (req, res) => {
  // si se le manda in id, le manda un usero
  res.send(`Get the user ${req.params.id}`);
});
userRouter.post("/", (req, res) => {
  // si se le pasa por post el id, esta encriptadas las caracteristicas del usero
  res.send(`Create a new user with ID: ${req.body.id}`);
});
userRouter.patch("/:id", (req, res) => {
  // "", en el cuerpo estan los elementos por cambiar del usero
  res.send(`Update the user ${req.params.id} with the values of ${req.body.name}, ${req.body.price} and
${req.body.qty}`);
});
userRouter.delete("/", (req, res) => {
  // "", se borra ese usero
  res.send(`Deleting the user ${req.body.id}`);
}); */
export default userRouter; // devuelve todas las direcciones en un paquete
