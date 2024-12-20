module.exports = (sequelize, DataTypes) => {
    const Rezervari = sequelize.define('Rezervari', {
      reserved_at: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    });
  
    Rezervari.associate = (models) => {
      Rezervari.belongsTo(models.Utilizator, {
        foreignKey: 'user_id',
      });
      Rezervari.belongsTo(models.LocuriDeParcare, {
        foreignKey: 'parking_id',
      });
    };
  
    return Rezervari;
  };