const md5 = require('md5');
const { user } = require('../database/models');

const register = async ({ name, email, password }) => {
  const hashPassword = md5(password);
  const findByNameOrEmail = await user.findOne({ where: { name, email } });
  if (findByNameOrEmail) return null;
  const userRegister = await user.create({ name, email, password: hashPassword, role: 'customer' });

  return userRegister;
};

const registerByAdmin = async ({ name, email, password, role }) => {
  const hashPassword = md5(password);
  const findByNameOrEmail = await user.findOne({ where: { name, email } });
  if (findByNameOrEmail) return null;
  const userRegister = await user.create({ name, email, password: hashPassword, role });

  return userRegister;
};

module.exports = { register, registerByAdmin };
