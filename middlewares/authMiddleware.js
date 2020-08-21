// Middleware de autenticação
module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  return authorization && authorization.length === 16
    ? next()
    : res.status(401).json({ message: 'Token inválido' });
};
