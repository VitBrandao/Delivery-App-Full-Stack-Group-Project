const md5 = require('md5');
const { user } = require('../database/models');

const register = async ({ name, email, password }) => {
  const hashPassword = md5(password);
  const findByNameOrEmail = await user.findOne({ name, email });
  if (findByNameOrEmail) return null;
  const userRegister = await user.create({ name, email, password: hashPassword, role: 'customer' });

  return userRegister;
};

module.exports = register;