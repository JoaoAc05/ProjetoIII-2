import express from "express";
import { AlunoRouter } from "./AlunoRouter.js";
import { HomeRouter } from "./HomeRouter.js";

const router = express.Router();
router.use("/aluno", AlunoRouter);
router.use("/home", HomeRouter);

export default router;