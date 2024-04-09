import { Router } from "express";

const welcomeRouter = Router();

welcomeRouter.get('/', async (req, res) => {
    res.status(200).send({
        message: 'Bem-vindo a rota de boas vindas kkkkk'
    })
})

export { welcomeRouter }