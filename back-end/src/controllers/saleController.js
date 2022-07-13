const saleService = require('../services/salesService');

const getSalesBySeller = async (req, res) => {
  try {
    const { id } = req.body;
    const sales = await saleService.getSalesBySeller(id);
    return res.status(200).json(sales);
  } catch (error) {
    console.error(error);
    return res.status(500).end();
  }
}

module.exports = { getSalesBySeller };
