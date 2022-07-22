const { Router } = require('express');
const salesController = require('../controllers/salesController');

const router = Router();

router.post('/sales', salesController.createSale);
router.post('/seller/orders', salesController.getSalesBySeller);
router.put('/sales/:id', salesController.updateStatusSale);
router.get('/customer/orders/:id', salesController.getSalesByUser);

module.exports = router;
