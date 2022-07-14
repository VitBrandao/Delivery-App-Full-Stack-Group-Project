const { sale } = require('../database/models');
const { salesProduct } = require('../database/models');

const salesService = async ({ 
  userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, saleDate, status, products }) => {
  const newSale = await sale
    .create({ userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, saleDate, status });
  
  const allProductsInSale = products 
    .map((product) => (salesProduct.create({ ...product, saleId: newSale.id })));
  Promise.all(allProductsInSale);
  
  return newSale.id;
};

module.exports = salesService;
