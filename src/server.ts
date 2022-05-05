import { routes } from './routes';
import cors from 'cors';
import express from 'express';

const app = express();

// GET, POST, PUT, PATCH, DELETE
// GET = Buscar informações
// POST = Cadastrar informações
// PUT = Atualizar informações de uma entidade
// PATCH = Atualizar uma informação única de uma entidade
// DELETE = Deletar uma informação

// express auxilia com as rotas da aplicação e cada rota realiza alguma ação 
// seja de receber req (=request/requisição) ou de enviar res (=response/resposta)
// app.get('/users', (req, res) => {
//     return res.send('Hello World');
// });

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333, () => {
    console.log('HTTP server running!');
});