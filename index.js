import express from "express";

const app = express();
app.use(express.json());

app.get('/',  async (req, res) => {

    res.status(200).send({
        message: 'Bem vindo a API Express 2.0'
    })
})

app.get('/api', async (req, res) => {
    res.status(200).json([
        {
            person: 2,
            employees: 12,   
            roles: "admin"
        },
        {
            person: 1,
            employees: 2,   
            roles: "emp"
        },
        {
            person: 5,
            employees: 222,   
            roles: "Dono"
        }
    ])
})

app.listen(3000, () => {
    console.log('Server está rodando porta 3000')
})