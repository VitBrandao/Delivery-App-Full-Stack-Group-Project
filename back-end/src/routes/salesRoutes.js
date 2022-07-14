const { Router } = require('express');
const salesController = require('../controllers/salesController');

const router = Router();

router.post('/sales', salesController.createSale);
router.post('/seller/orders', salesController.getSalesBySeller);

module.exports = router;
