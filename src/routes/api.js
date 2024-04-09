import { Router } from "express";

const apiRouter = Router();

apiRouter.get('/', async(req, res) => {
    res.status(200).json([
        {
            id: 1,
            name: "Joao",
            age: 32,
        },
        {
            id: 2,
            name: "Ana",
            age: 14,
        },
        {
            id: 3,
            name: "Fernando",
            age: 19,
        },
    ])
})

export { apiRouter }