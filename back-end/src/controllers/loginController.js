const login = require('../services/loginService');
const token = require('../services/generateToken');

const loginController = async (req, res, _next) => {
  const { body } = req;
  try {
    const loginInfos = await login(body);
    console.log(loginInfos);
    const { email, name, role } = loginInfos;
    return res.status(200).json({ name, email, role, token: token(loginInfos.email) });
  } catch (err) {
    return res.status(500).json(console.log(err));
  }
};

module.exports = loginController;