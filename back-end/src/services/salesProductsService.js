const { salesProduct, sale, product } =  require('../database/models');

const getBySaleId = async (id) => {
  const saleProductById = await salesProduct.findOne({ where: { sale_id: id }}, {
    include: [
      { 
        model: sale,
        as: 'sale',
      },
      {
        model: product,
        as: 'product'
      }
    ]
  });
  return saleProductById;
}

module.exports = { getBySaleId };
