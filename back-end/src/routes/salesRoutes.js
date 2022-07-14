const { Router } = require('express');
const salesController = require('../controllers/salesController');
const saleController = require('../controllers/saleController');

const router = Router();

router.post('/sales', salesController);
router.post('/seller/orders', saleController.getSalesBySeller);

module.exports = router;
