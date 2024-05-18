const express = require('express');
const bodyParse = require('body-parser')
const cors = require('cors');
const pg = require('pg');
const app = express();
const port = process.env.PORT ||  3000;

app.use(cors());
app.use(express.json());
app.use(bodyParse.json());

const carroRouter = require('./Routers/carro.router');
const clienteRouter = require('./Routers/cliente.router');
const comprovanteRouter = require('./Routers/comprovante.router');
const feedbackRouter = require('./Routers/feedback.router');
const funcionarioRouter = require('./Routers/funcionario.router');
const locacaoRouter = require('./Routers/locacao.router');
const manutencaoRouter = require('./Routers/manutencao.router');

app.use('/carro', carroRouter);
app.use('/cliente', clienteRouter);
app.use('/comprovante', comprovanteRouter);
app.use('/feedback', feedbackRouter);
app.use('/funcionario', funcionarioRouter);
app.use('/locacao', locacaoRouter);
app.use('/manutencao', manutencaoRouter);

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});