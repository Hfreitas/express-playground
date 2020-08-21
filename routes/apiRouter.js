const express = require('express');

const router = express.Router();
// acessando arquivos com funções já promisificadas
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

const writeFileData = async (data) => {
  try {
    const update = await fs.writeFile(
      path.join(__dirname, 'simpsons.json'),
      JSON.stringify(data),
    );
    return update;
  } catch (error) {
    return error;
  }
};

router
  .get('/', async (_req, res) => {
    try {
      const response = await readFileData();
      return res.status(200).send(response);
    } catch (error) {
      return res.status(401).send('Ooops!');
    }
  })
  .get('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const response = await readFileData();
      const filterResponse = response.find((element) => element.id === id);
      return res.status(200).send(filterResponse);
    } catch (error) {
      return error;
    }
  })
  .post('/register', async (req, res) => {
    try {
      const { id, name } = req.body;
      if (!id || !name) return res.status(400);
      const characters = await readFileData();
      const invalidId = characters.some((element) => element.id === id);
      if (invalidId) return res.status(400).json({ message: 'id duplicado' });
      await writeFileData([...characters, { id, name }]);
      return res.status(200).json('Novo personagem cadastrado');
    } catch (error) {
      return error;
    }
  });

module.exports = router;
