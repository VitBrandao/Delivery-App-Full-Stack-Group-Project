const productsModel = (sequelize, DataTypes) => {
  const Products = sequelize.define('product', {
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    urlImage: DataTypes.STRING,
  }, {
    timestamps: false,
    underscored: true,
  });

  return Products;
};

module.exports = productsModel;
