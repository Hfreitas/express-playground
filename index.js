const express = require('express');

const app = express();
const router = require('./router');

const port = 8080;

// Método express.json() acessa o body das requisições
app.use(express.json());

// Fazendo uso das rotas
app.use('/simpsons', router);

// eslint-disable-next-line no-unused-vars
const errorMiddleware = (err, _req, res, _next) =>
  res.status(500).send(`Oops! Mensagem: ${err.message}`);

app.use(errorMiddleware);

// eslint-disable-next-line no-console
app.listen(port, () => console.log('Porta 8080 e além!'));
