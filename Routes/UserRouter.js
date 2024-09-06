import express from "express";
import { userController } from "../src/Controller/UserController.js";

const UserRouter = express.Router();
const UserController = new userController();

//Rotas Usuário
UserRouter.get('/', UserController.getAll); // Select *
UserRouter.get('/:id', UserController.getId); //Select * where id =
UserRouter.post('/', UserController.cadastro); // Insert
UserRouter.put('/', UserController.alterar); // Alter
UserRouter.delete('/:id', UserController.deletar); //Delete

export { UserRouter };