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

module.exports = { getSalesBySeller };
