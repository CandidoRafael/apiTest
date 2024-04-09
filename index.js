import express from "express";
import cors from 'cors';
import { router } from "./src/routes/index.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);

app.get('/', (req, res) => {
    res.status(200).send({
        message: 'Rota principal Express 2.0'
    })
})

app.listen(3000, () => {
    console.log('Server está rodando porta 3000')
})