const { getBySaleId } = require('../services/salesProductsService');

const getById = async (req, res) => {
  const { id } = req.params;
  const sale = await getBySaleId(id);
  return res.status(200).json(sale);
}

module.exports = { getById };
