module.exports = (sequelize, DataTypes) => {
  let alias = "Cities";
  let cols = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nameCity: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
  };
  let config = {
    tableName: "cities",
    timestamps: false,
  };

  const Cities = sequelize.define(alias, cols, config);

  Cities.associate = function (models) {
    Cities.hasMany(models.Buildings, {
      as: "Buildings",
      foreignKey: "cityId",
    });
  };

  return Cities;
};
