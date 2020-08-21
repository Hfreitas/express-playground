// eslint-disable-next-line no-unused-vars
module.exports = (err, _req, res, _next) =>
  res.status(500).send(`Oops! Mensagem: ${err.message}`);
