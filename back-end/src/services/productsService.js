const { product } = require('../database/models');

const getAll = async () => {
  const allProducts = await product.findAll();
  return allProducts;
};

const getById = async (id) => {
  const productById = await product.findByPk(id);
  if (!productById) return null;
  return productById;
};

module.exports = { getAll, getById };