import express from "express";
import { homeController } from "../src/Controller/HomeController.js";

const HomeRouter = express.Router();
const HomeController = new homeController();

//Rotas Usuário (/aluno)
HomeRouter.get('/', HomeController.getHome); // Select *

export { HomeRouter };