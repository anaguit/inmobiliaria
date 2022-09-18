module.exports = (sequelize, DataTypes) => {
  let alias = "Conditions";
  let cols = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    typeConditions: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
  };
  let config = {
    tableName: "conditions",
    timestamps: false,
  };

  const Conditions = sequelize.define(alias, cols, config);

  Conditions.associate = function (models) {
    Conditions.hasMany(models.Buildings, {
      as: "Buildings",
      foreignKey: "conditionId",
    });
  };
  return Conditions;
};
