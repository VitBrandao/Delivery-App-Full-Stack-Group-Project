const { product } = require('../database/models');

const productsService = async () => {
  const allProducts = await product.findAll();
  return allProducts;
};

module.exports = productsService;