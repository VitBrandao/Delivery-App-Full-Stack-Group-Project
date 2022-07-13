const login = require('../services/loginService');
const token = require('../services/generateToken');

const loginController = async (req, res, _next) => {
  const { body } = req;
  try {
    const loginInfos = await login(body);

    if (loginInfos === null) {
      return res.status(404).json({ message: 'Email or Password not valid' });
    }

    const { email, name, role } = loginInfos;
    return res.status(200).json({ name, email, role, token: token(email) });
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports = loginController;