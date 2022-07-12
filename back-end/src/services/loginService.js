const { User } = require('../database/models/usersModel');

const login = async ({ email }) => {
  const userLogin = await User.findOne({ where: { email } });
  if (!userLogin) return null;
  return userLogin;
};

export default login;
