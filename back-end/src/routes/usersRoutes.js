const { Router } = require('express');
const usersController = require('../controllers/usersController');

const router = Router();

router.get('/users', usersController.getAll);

module.exports = router;