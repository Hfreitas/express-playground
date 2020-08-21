const express = require('express');
const app = express();
const router = require('./router');
const port = 8080;

// Fazendo uso das rotas
app.use('/simpsons', router);

app.use((req, res) =>{})
