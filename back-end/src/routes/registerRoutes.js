const { Router } = require('express');
const { 
  registerController, 
  registerByAdminController,
} = require('../controllers/registerController');

const router = Router();

router.post('/register', registerController);

router.post('/admin/manage', registerByAdminController);

module.exports = router;
