const jwt = require('jsonwebtoken');
const { readFileSync } = require('fs');
const path = require('path');

const generateToken = (email) => {
  const keyPath = path.resolve(__dirname, '..', '..', 'jwt.evaluation.key');
  const secretKey = readFileSync(keyPath, 'utf-8');

  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

  const token = jwt.sign({ email }, secretKey, jwtConfig);

  return token;
};

export default generateToken;
