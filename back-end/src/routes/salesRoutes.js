const { Router } = require('express');
const salesController = require('../controllers/salesController');

const router = Router();

router.post('/sales', salesController);

module.exports = router;