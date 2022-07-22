const { register, registerByAdmin } = require('../services/registerService');
const token = require('../services/generateToken');

const registerController = async (req, res, _next) => {
  const { body } = req;
  try {
    const registerInfos = await register(body);

    if (registerInfos === null) {
      return res.status(409).json({ message: 'User already exists' });
    }

    const { id, email, name, role } = registerInfos;
    return res.status(201).json({ id, name, email, role, token: token(email) });
  } catch (err) {
    return res.status(500).json(err);
  }
};

const registerByAdminController = async (req, res, _next) => {
  const { body } = req;
  try {
    const registerInfos = await registerByAdmin(body);

    if (registerInfos === null) {
      return res.status(409).json({ message: 'User already exists' });
    }

    const { email, name, role } = registerInfos;
    return res.status(201).json({ name, email, role });
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports = { registerController, registerByAdminController };
