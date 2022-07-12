const salesProductsModel = (sequelize, DataTypes) => {
  const SalesProducts = sequelize.define('SalesProduct', { 
    saleId: DataTypes.INTEGER, productId: DataTypes.INTEGER, quantity: DataTypes.INTEGER,
  }, { timestamps: false, underscored: true });

  SalesProducts.associate = (models) => {
    models.Sales.belongsToMany(models.Products, {
      as: 'Products',
      through: SalesProducts,
      foreignKey: 'saleId',
      otherKey: 'productId',
    });
    models.Products.belongsToMany(models.Sales, {
      as: 'Sales',
      through: SalesProducts,
      foreignKey: 'productId',
      otherKey: 'saleId',
    });
  };
  return SalesProducts;
};

export default salesProductsModel;
