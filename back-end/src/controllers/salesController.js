const salesService = require('../services/salesService');

const createSale = async (req, res, _next) => {
  const {
    userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, status, products,
  } = req.body;

  const newSale = await salesService.createSale({
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

const getSalesBySeller = async (req, res) => {
  try {
    const { id } = req.body;
    const sales = await salesService.getSalesBySeller(id);
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
    const saleUpdated = await salesService.updateStatusSale(status, id);
    if (!saleUpdated) return res.status(404).json({ message: 'Sale Not Found!' });
    return res.status(200).json(saleUpdated);
  } catch (error) {
    console.error(error);
    return res.status(500).end();
  }
};

const getSalesByUser = async (req, res) => {
  try {
    const { id } = req.params;
    const sales = await salesService.getSalesByUser(id);
    return res.status(200).json(sales);
  } catch (error) {
    console.error(error);
    return res.status(500).end();
  }
}

module.exports = { 
  createSale, 
  getSalesBySeller,
  updateStatusSale,
  getSalesByUser,
};
