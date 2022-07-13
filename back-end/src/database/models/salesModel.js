const salesModel = (sequelize, DataTypes) => {
  const Sale = sequelize.define('sale', {
    userId: DataTypes.INTEGER,
    sellerId: DataTypes.INTEGER,
    totalPrice: DataTypes.DECIMAL,
    deliveryAddress: DataTypes.STRING,
    deliveryNumber: DataTypes.STRING,
    saleDate: DataTypes.DATE,
    status: DataTypes.STRING,
  }, { timestamps: true, underscored: true });

  Sale.associate = (models) => {
    Sale.belongsTo(models.user, {
      foreignKey: 'userId',
    });
    Sale.belongsTo(models.user, {
      foreignKey: 'sellerId',
    });
  };

  return Sale;
};

module.exports = salesModel;