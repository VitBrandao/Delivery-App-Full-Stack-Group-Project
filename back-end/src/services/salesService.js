const { sale, user } = require('../database/models');

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

module.exports = { getSalesBySeller, updateStatusSale };
