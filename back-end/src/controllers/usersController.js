const usersService = require('../services/usersService');

const getAll = async (_req, res) => {
  try {
    const allUsers = await usersService.getAll();
    return res.status(200).json(allUsers);
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports = { getAll };