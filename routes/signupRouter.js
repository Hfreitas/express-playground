const express = require('express');
const generateToken = require('../utils/generateToken');

const router = express.Router();

router.post('/', async (req, res) => {
  const { email, password, firstName, phone } = req.body;
  return email && password && firstName && phone
    ? res.status(200).json({ token: generateToken() })
    : res.status(400).json({ message: 'invalid data' });
});

module.exports = router;
