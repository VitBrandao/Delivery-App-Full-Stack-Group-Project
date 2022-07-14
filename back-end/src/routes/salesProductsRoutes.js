const { Router } = require('express');
const saleProductsController = require('../controllers/salesProductsController');

const router = Router();

router.get('/seller/orders/:id', saleProductsController.getById);

module.exports = router;
