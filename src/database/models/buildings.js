module.exports = (sequelize, DataTypes) => {
  let alias = "Buildings";
  let cols = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    numberOfRooms: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10),
      allowNull: false,
    },
    squareMeter: {
      type: DataTypes.DECIMAL(10),
      allowNull: false,
    },
    featured: {
      type: DataTypes.TINYINT(4),
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    conditionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    contractId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    cityId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    countryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  };

  let config = {
    tableName: "buildings",
    timestamps: false,
  };

  const Buildings = sequelize.define(alias, cols, config);

  Buildings.associate = function (models) {
    Buildings.belongsTo(models.Cities, {
      as: "Cities",
      foreignKey: "cityId",
    });
    Buildings.belongsTo(models.Countries, {
      as: "Countries",
      foreignKey: "countryId",
    });
    Buildings.belongsTo(models.Contracts, {
      as: "Contracts",
      foreignKey: "contractId",
    });
    Buildings.belongsTo(models.Conditions, {
      as: "Conditions",
      foreignKey: "conditionId",
    });
  };

  return Buildings;
};
