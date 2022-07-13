const { Router } = require('express');
const registerController = require('../controllers/registerController');

const router = Router();

router.post('/register', registerController);

module.exports = router;