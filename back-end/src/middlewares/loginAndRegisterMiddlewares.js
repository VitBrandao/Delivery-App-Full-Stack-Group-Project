// const { user } = require('../database/models');

// const verifyEmailInDB = async (req, res, next) => {
//   const { email } = req.body;
//   const allUsers = await user.findAll();
//   const findByEmail = allUsers.find((userEmail) => userEmail.email === email);
//   if (!findByEmail) return res.status(404).json({ message: 'Not found' });
//   next();
// };

// module.exports = {
//   verifyEmailInDB,
// };