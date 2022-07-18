const { user } = require('../database/models');

const getAll = async () => {
  const allUsers = await user.findAll();
  return allUsers;
};

module.exports = { getAll };