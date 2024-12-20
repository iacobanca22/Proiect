module.exports = (sequelize, DataTypes) => {
    const LocuriDeParcare = sequelize.define('LocuriDeParcare', {
      lat: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      lng: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'disponibil', // locul este disponibil inițial
      },
      building_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    });
  
    LocuriDeParcare.associate = (models) => {
      LocuriDeParcare.hasMany(models.Rezervari, {
        foreignKey: 'parking_id',
      });
    };
  
    return LocuriDeParcare;
  };