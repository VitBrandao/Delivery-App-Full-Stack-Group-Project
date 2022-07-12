const userModel = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
  }, {
    timestamps: false,
  });

  User.associate = (models) => {
    User.hasMany(models.sale, {
      foreignKey: 'userId',
    });
    User.hasMany(models.sale, {
      foreignKey: 'sellerId',
    });
  }

  return User;
}

module.exports = userModel;