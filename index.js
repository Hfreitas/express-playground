const express = require('express');

const app = express();
const router = require('./router');

const port = 8080;

app.get('/', (_req, res) => res.send('endpoint correto é /simpsons'));

// Fazendo uso das rotas
app.use('/simpsons', router);

// eslint-disable-next-line no-unused-vars
const errorMiddleware = (err, _req, res, _next) => {
  res.status(500).send(`Oops! Mensagem: ${err.message}`);
};
app.use(errorMiddleware);

app.listen(port, () => console.log('Porta 8080 e além!'));
