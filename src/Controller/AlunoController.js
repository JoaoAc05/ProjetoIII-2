import { prisma } from "../prisma.js";

class alunoController {
    async getAll(req, res, next) { 
        try {
            const alunos = await prisma.Aluno.findMany()
            res.status(200).json(alunos);
        } catch (e) {
            res.status(500).json({error: 'Erro ao retornar aluno: ' + e.message});
        }
    }

    async getId(req, res, next) {
        const {
            indice
        } = req.params;
        try {
            const aluno = await prisma.Aluno.findUnique({
                where: {
                    indice: Number(indice),
                },
            })
            res.status(200).json(aluno)
        } catch (e) {
            res.status(500).json({error: 'Erro ao retornar aluno: ' + e.message})
        }
    };

    async cadastro(req, res, next) {
        try{
            const createAluno = await prisma.Aluno.create({ data: req.body })
            res.status(201).json(createAluno);
        } catch (e) {
            res.status(500).json({error: 'Erro ao criar aluno: ' + e.message});
        }
    }

    async alterar(req, res, next) {
        const { indice } = req.params;
        const dataToUpdate = req.body; // Sem necessidade de indice no body
    
        // Verifica se o body está vazio
        if (Object.keys(dataToUpdate).length === 0) {
            return res.status(400).json({ error: 'Nenhum dado fornecido para atualização.' });
        }
    
        try {
            const updateAlunos = await prisma.Aluno.updateMany({
                where: {
                    indice: Number(indice),
                },
                data: dataToUpdate,  // Passa diretamente o req.body
            });
    
            if (updateAlunos.count === 0) {
                return res.status(404).json({ error: 'Aluno não encontrado.' });
            }
    
            res.status(200).json({ sucesso: 'Aluno alterado com sucesso.' });
        } catch (e) {
            res.status(500).json({ error: 'Erro ao alterar aluno: ' + e.message });
        }
    }

    async deletar(req, res, next) {
        const { indice } = req.params;
        try {
            const deleteAlunos = await prisma.Aluno.deleteMany({
                where: { 
                    indice: Number(indice), 
                },
            })
            res.status(200).json({sucesso: 'Aluno deletado com sucesso.'})
        } catch (e) {
            res.status(500).json({error: 'Erro ao deletar aluno.' + e.message})
        }
    }
}
export { alunoController };