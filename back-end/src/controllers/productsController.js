const productsService = require('../services/productsService');

const productsController = async (req, res, _next) => {
  try {
    const products = await productsService();
    return res.status(200).json(products);
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports = productsController;