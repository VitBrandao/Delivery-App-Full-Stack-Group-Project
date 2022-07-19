const { Router } = require('express');
const { 
  registerController, 
  registerByAdminController,
} = require('../controllers/registerController');
const authorizationToken = require('../middlewares/auth/authorizationToken');

const router = Router();

router.post('/register', registerController);

router.post('/admin/manage', authorizationToken, registerByAdminController);

module.exports = router;
