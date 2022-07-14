const salesService = require('../services/salesService');

const salesController = async (req, res, _next) => {
  const {
    userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, status, products,
  } = req.body;

  const newSale = await salesService({
    userId, 
    sellerId, 
    totalPrice, 
    deliveryAddress, 
    deliveryNumber, 
    status,
    products,
 });

 return res.status(201).json(newSale);
};

module.exports = salesController;