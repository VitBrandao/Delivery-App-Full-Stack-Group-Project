const productsService = require('../services/productsService');

const getAll = async (req, res) => {
  try {
    const products = await productsService.getAll();
    return res.status(200).json(products);
  } catch (err) {
    return res.status(500).json(err);
  }
};

const getById = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await productsService.getById(id);
    if (product === null) {
      return res.status(404).json({ message: 'Product not found' });
    }
    return res.status(200).json(product);
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports = { getAll, getById };