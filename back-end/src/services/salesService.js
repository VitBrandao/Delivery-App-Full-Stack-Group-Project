const { sale, salesProduct } = require('../database/models');

const saleService = async (
  { userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, saleDate, status }
  ) => {
  const newSale = await sale
    .create({ userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, saleDate, status },
      
    );
};

module.exports = saleService;


/* const findById = async (id) => {
  const post = await BlogPost.findOne({ 
  include: [
  {
  model: User, 
  as: 'user',
  attributes: { exclude: ['password'] },
  },
  {
  model: Category,
  as: 'categories',
  through: { attributes: [] },
  },
  ], 
  where: { id }, 
  });
  return post;  */