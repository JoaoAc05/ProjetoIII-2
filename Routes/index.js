import express from "express";
import { AlunoRouter } from "./AlunoRouter.js";
import { HomeRouter } from "./HomeRouter.js";

const router = express.Router();
router.get('/', (req, res, next) => {
    res.json({
        "statuscode": 200,
        "sucesso": "Rota default - ProjetoIII V2"
    });
});
router.use("/aluno", AlunoRouter);
router.use("/home", HomeRouter);

export default router;