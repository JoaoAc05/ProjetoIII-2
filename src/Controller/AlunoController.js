import { prisma } from "../prisma.js";

class alunoController {
    async getAll(req, res, next) { 
        try {
            const alunos = await prisma.Aluno.findMany()
            res.status(200).json(alunos);
        } catch (e) {
            res.status(500).json({error: 'Erro ao retornar aluno'});
        }
    }

    async getId(req, res, next) {
        const {
            id
        } = req.params;
        try {
            const aluno = await prisma.Aluno.findUnique({
                where: {
                    id: Number(id),
                },
            })
            res.status(200).json(aluno)
        } catch (e) {
            res.status(500).json({error:'Erro ao retornar aluno.'})
        }
    };

    async cadastro(req, res, next) {
        try{
            const createAluno = await prisma.Aluno.create({ data: req.body })
            res.status(200).json({success: 'Aluno criado com sucesso.'});
        } catch (e) {
            res.status(500).json({error: console.log(e) + 'Erro ao criar aluno.'});
        }
    }

    async alterar(req, res, next){
        const { id } = req.body;

        try { 
            const updateAlunos = await prisma.Aluno.updateMany({
                where: {
                    id: id,
                },
                data: req.body
            })
            res.status(200).json({sucesso: 'Aluno alterado com sucesso.'});
        } catch (e) {
            res.status(500).json({error: 'Erro ao alterar aluno'});
        }
    }

    async deletar(req, res, next) {
        const { id } = req.params;
        try {
            const deleteAlunos = await prisma.Aluno.deleteMany({
                where: { id: Number(id), },
            })
            res.status(200).json({sucess: 'Aluno deletado com sucesso.'})
        } catch (e) {
            res.status(500).json({error: 'Erro ao deletar aluno.'})
        }
    }
}
export { alunoController };