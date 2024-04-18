import express from "express";
import cors from 'cors';
import router from "./src/routes/index.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log('Server está rodando porta 3000')
})