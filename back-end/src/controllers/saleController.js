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
};

const updateStatusSale = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const saleUpdated = await saleService.updateStatusSale(status, id);
    if (!saleUpdated) return res.status(404).json({ message: 'Sale Not Found!' });
    return res.status(200).json(saleUpdated);
  } catch (error) {
    console.error(error);
    return res.status(500).end();
  }
};

module.exports = { getSalesBySeller, updateStatusSale };
