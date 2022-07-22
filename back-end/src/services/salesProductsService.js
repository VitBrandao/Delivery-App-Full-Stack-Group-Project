const { salesProduct, sale, product } = require('../database/models');

const getBySaleId = async (id) => {
  const saleProductById = await salesProduct.findOne({ where: { saleId: id } }, {
    include: [
      { 
        model: sale,
        as: 'sales',
      },
      {
        model: product,
        as: 'products',
      },
    ],
  });
  return saleProductById;
};

module.exports = { getBySaleId };
