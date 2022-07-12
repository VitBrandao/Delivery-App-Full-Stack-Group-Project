const md5 = require('md5');
const { user } = require('../database/models');

const login = async ({ email, password }) => {
  const hashPassword = md5(password);
  const userLogin = await user.findOne({ where: { email } });
  if (!userLogin) return null;
  if (userLogin.password !== hashPassword) return null;
  return userLogin;
};

module.exports = login;
