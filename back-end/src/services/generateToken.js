const jwt = require('jsonwebtoken');
const { readFileSync } = require('fs');

const generateToken = (email) => {
  const secretKey = readFileSync('jwt.evaluation.key', 'utf-8');

  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

  const token = jwt.sign({ email }, secretKey, jwtConfig);

  return token;
};

module.exports = generateToken;
