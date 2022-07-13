const { Router } = require('express');
const loginController = require('../controllers/loginController');
// const { verifyEmailInDB } = require('../middlewares/loginAndRegisterMiddlewares');

const router = Router();

router.post('/login', loginController);

module.exports = router;