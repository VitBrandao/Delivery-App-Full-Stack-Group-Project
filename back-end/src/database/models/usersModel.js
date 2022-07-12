export const userModel = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
  }, {
    timestamps: false,
  });

  User.associate = (models) => {
    User.hasMany(models.Sales, {
      foreignKey: 'userId', as: 'User',
    });
    User.hasMany(models.Sales, {
      foreignKey: 'sellerId', as: 'User',
    });
  }

  return User;
}