const express = require('express');
const bodyParse = require('body-parser')
const cors = require('cors');
const pg = require('pg');
const app = express();
const port = process.env.PORT ||  3000;

app.use(cors());
app.use(express.json());
app.use(bodyParse.json());

const carroRouter = require('./src/Routers/carroRouter');
const clienteRouter = require('./src/Routers/clienteRouter');
const comprovanteRouter = require('./src/Routers/comprovanteRouter');
const feedbackRouter = require('./src/Routers/feedbackRouter');
const funcionarioRouter = require('./src/Routers/funcionarioRouter');
const locacaoRouter = require('./src/Routers/locacaoRouter');
const manutencaoRouter = require('./src/Routers/manutencaoRouter');

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