import express from "express";
import { AlunoRouter } from "./AlunoRouter.js";

const router = express.Router();
router.use("/aluno", AlunoRouter);

export default router;