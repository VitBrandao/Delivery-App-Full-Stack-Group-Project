const { sale, user, salesProduct } = require('../database/models');

const createSale = async ({ 
  userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, saleDate, status, products }) => {
  const newSale = await sale
    .create({ userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, saleDate, status });
  
  const allProductsInSale = products 
    .map((product) => (salesProduct.create({ ...product, saleId: newSale.id })));
  Promise.all(allProductsInSale);
  
  return newSale.id;
};

const getSalesBySeller = async (id) => {
  const sales = await sale.findAll({ where: { sellerId: id } }, {
    include: [
      { 
        model: user,
      },
    ],
  });
  return sales;
};

const updateStatusSale = async (status, id) => {
  const findSaleById = await sale.findByPk(id);
  if (!findSaleById) return null;
  await sale.update({ status }, { where: { id } });
  return { ...findSaleById, status };
};

const getSalesByUser = async (id) => {
  const sales = await sale.findAll({ where: { userId: id } }, {
    include: [
      { 
        model: user,
      },
    ],
  });
  return sales;
}

module.exports = { 
  createSale, 
  getSalesBySeller, 
  updateStatusSale,
  getSalesByUser,
};
