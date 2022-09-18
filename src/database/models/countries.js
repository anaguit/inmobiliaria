module.exports = (sequelize, DataTypes) => {
  let alias = "Countries";
  let cols = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nameCountry: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
  };
  let config = {
    tableName: "countries",
    ttimestamps: false,
  };

  const Countries = sequelize.define(alias, cols, config);

  Countries.associate = function (models) {
    Countries.hasMany(models.Buildings, {
      as: "Buildings",
      foreignKey: "countryId",
    });
  };
  return Countries;
};
