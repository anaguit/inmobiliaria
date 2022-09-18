module.exports = (sequelize, DataTypes) => {
  let alias = "Contracts";
  let cols = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    typeContract: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
  };
  let config = {
    tableName: "contracts",
    timestamps: false,
  };

  const Contracts = sequelize.define(alias, cols, config);

  Contracts.associate = function (models) {
    Contracts.hasMany(models.Buildings, {
      as: "Buildings",
      foreignKey: "contractId",
    });
  };
  return Contracts;
};
