import { Router } from "express";
import { welcomeRouter } from "./welcome.js";
import { apiRouter } from "./api.js";

const router = Router();

router.use('/', router.get('/', async (req, res) => {
    res.status(200).send('Bem vindo a rota principal')
}))
router.use('/api', apiRouter);
router.use('/welcome', welcomeRouter);

export { router }