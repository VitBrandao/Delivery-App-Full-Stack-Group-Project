const salesProductsModel = (sequelize, DataTypes) => {
  const SalesProducts = sequelize.define('salesProduct', { 
    saleId: DataTypes.INTEGER, productId: DataTypes.INTEGER, quantity: DataTypes.INTEGER,
  }, { timestamps: false, underscored: true });

  SalesProducts.associate = (models) => {
    models.sale.belongsToMany(models.product, {
      as: 'product',
      through: SalesProducts,
      foreignKey: 'saleId',
      otherKey: 'productId',
    });
    models.product.belongsToMany(models.sale, {
      as: 'sale',
      through: SalesProducts,
      foreignKey: 'productId',
      otherKey: 'saleId',
    });
  };
  return SalesProducts;
};

module.exports = salesProductsModel;
