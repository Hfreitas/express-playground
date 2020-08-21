const express = require('express');
const app = express();
const port = 8080;

// Enviando resposta de requisição
app.route('/').get((_req, res) => res.send(`Hello, nurse!`));

app
  .route('/ping')
  .get((_req, res) => res.send(JSON.stringify({ message: 'Pong' })));

// Recebendo um parametro query e.g. https://minha-api.com/endpoint/1?name=exemplo&age=10. e retornando uma mensagem.
app
.route('/hello/')
.post((req, res) => {
  const { name, age } = req.query;
  age > 17
    ? res.status(200).json(JSON.stringify({ message: `Hello, ${name}!` }))
    : res.status(401).json(JSON.stringify({ message: 'Unathorized' }));
});

app
.route('/users/:name/:age')
.put((req, res) => {
  const { name, age } = req.params;
  res.send(
    JSON.stringify({
      message: `Seu nome é ${name} e você tem ${age} anos de idade`,
    }),
  );
});

// Ouvindo porta 8080
app.listen(port, () => console.log(`Ouvindo porta 8080`));
