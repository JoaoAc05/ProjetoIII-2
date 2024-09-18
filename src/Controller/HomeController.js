class homeController {
    async getHome(req, res, next) { 
        res.status(200).json({sucesso: 'Bem vindo a tela inicial do projeto V2'});
    }
}
export { homeController };