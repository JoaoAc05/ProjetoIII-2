import { prisma } from "../prisma.js";

class userController {
    async getAll(req, res, next) { 
        try {
            const users = await prisma.Usuario.findMany()
            res.status(200).json(users);
        } catch (e) {
            res.status(500).json({error: 'Erro ao retornar usuário'});
        }
    }

    async getId(req, res, next) {
        const {
            id
        } = req.params;
        try {
            const user = await prisma.Usuario.findUnique({
                where: {
                    id: Number(id),
                },
            })
            res.status(200).json(user)
        } catch (e) {
            res.status(500).json({error:'Erro ao retornar usuário.'})
        }
    };

    async cadastro(req, res, next) {
        try{
            const createUser = await prisma.Usuario.create({ data: req.body })
            res.status(200).json({success: 'Usuário criado com sucesso.'});
        } catch (e) {
            res.status(500).json({error: console.log(e) + 'Erro criar usuários.'});
        }
    }

    async alterar(req, res, next){
        const { id } = req.body;

        try { 
            const updateUsers = await prisma.Usuario.updateMany({
                where: {
                    id: id,
                },
                data: req.body
            })
            res.status(200).json({sucesso: 'Usuário alterado com sucesso.'});
        } catch (e) {
            res.status(500).json({error: 'Erro ao alterar usários'});
        }
    }

    async deletar(req, res, next) {
        const { id } = req.params;
        try {
            const deleteUsers = await prisma.Usuario.deleteMany({
                where: { id: Number(id), },
            })
            res.status(200).json({sucess: 'Usuário deletado com sucesso.'})
        } catch (e) {
            res.status(500).json({error: 'Erro ao deletar usuário.'})
        }
    }
}
export { userController };