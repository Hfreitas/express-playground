const express = require('express');
// rotas de respostas da api
const apiRouter = require('./routes/apiRouter');
const signupRouter = require('./routes/signupRouter');
// middlewares
const errorMiddleware = require('./middlewares/errorMiddleware');
const authMiddleware = require('./middlewares/authMiddleware');

const app = express();
const port = 8080;

// Método express.json() acessa o body das requisições
app.use(express.json());

// Fazendo uso das rotas, aplicando middleware de autenticação.
app.use('/simpsons', authMiddleware, apiRouter);
app.use('/signup', signupRouter);
app.use('*', (_req, res) =>
  res.status(404).json({ message: 'invalid endpoint' }),
);

// Tratando erros de execução
app.use(errorMiddleware);

// eslint-disable-next-line no-console
app.listen(port, () => console.log('Porta 8080 e além!'));
