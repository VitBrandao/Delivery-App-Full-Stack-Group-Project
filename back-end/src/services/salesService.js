const { sale, user } = require('../database/models');

const getSalesBySeller = async (id) => {
  const sales = await sale.findAll({ where: { seller_id: id }}, {
    include: [
      { 
        model: user,
      }
    ]
  });
  return sales;
}

module.exports = { getSalesBySeller };
