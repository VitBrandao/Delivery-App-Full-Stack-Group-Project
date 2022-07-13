const jwt = require('jsonwebtoken');
const path = require('path');
const { readFileSync } = require('fs');
const generateToken = require('../../services/generateToken');

const validateToken = async () => {
  const keyPath = path.resolve(__dirname, '..', '..', 'jwt.evaluation.key');
  const secretKey = readFileSync(keyPath, 'utf-8');

  if (!generateToken) return { message: 'Token not found' };
  
  let notAuthorized = false;
  
  jwt.verify(generateToken, secretKey, (err) => {
    if (err) notAuthorized = true;
  });

  if (notAuthorized === true) return { message: 'Expired or invalid token' };

  return 'Authorized!';
};

module.exports = validateToken;