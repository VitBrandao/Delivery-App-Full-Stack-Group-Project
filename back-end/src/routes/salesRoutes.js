const { Router } = require('express');
const saleController = require('../controllers/saleController');

const router = Router();

router.post('/seller/orders', saleController.getSalesBySeller);

router.put('/sales/:id', saleController.updateStatusSale);

module.exports = router;
