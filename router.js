const express = require('express');

const router = express.Router();
// acessando arquivos
const fs = require('fs').promises;
// tratando path dos arquivos
const path = require('path');

const readFileData = async () => {
  try {
    /* Lendo o arquivo simpsons.json de forma
    assícrona. __dirname refere-se ao path 
    absoluto do diretório que contém o executável */
    // join output - ./simpsons.json (relative path)
    const data = await fs.readFile(path.join(__dirname, 'simpsons.json'));
    return JSON.parse(data.toString('utf-8'));
  } catch (error) {
    return error;
  }
};

router.get('/', async (_req, res) => {
  try {
    const response = await readFileData();
    res.status(200).send(response);
  } catch (error) {
    res.status(401).send('Ooops!');
  }
});

module.exports = router;
