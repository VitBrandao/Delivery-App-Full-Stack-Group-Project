const jwt = require('jsonwebtoken');
const { readFileSync } = require('fs');

const validateToken = async (req, res, next) => {
  const secretKey = readFileSync('jwt.evaluation.key', 'utf-8');

  const { authorization } = req.headers;

  if (!authorization) return res.status(404).json({ message: 'Token not found' });
  try {
    const decoded = jwt.verify(authorization, secretKey);
    req.user = decoded;
    next();
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }  
};

module.exports = validateToken;