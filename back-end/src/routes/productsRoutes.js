const { Router } = require('express');
const productsController = require('../controllers/productsController');

const router = Router();

router.get('/products', productsController.getAll);
router.get('/products/:id', productsController.getById);

module.exports = router;