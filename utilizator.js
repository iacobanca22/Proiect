module.exports = (sequelize, DataTypes) => {
    const Utilizator = sequelize.define('Utilizator', {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    });
  
    Utilizator.associate = (models) => {
      Utilizator.hasMany(models.Rezervari, {
        foreignKey: 'user_id',
      });
    };
  
    return Utilizator;
  };