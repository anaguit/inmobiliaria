const db = require("../database/models");

const create = async (buildings) => {
  console.log(buildings);
  return await db.Buildings.create(buildings);
};

const getAll = async () => {
  return await db.Buildings.findAll();
};

module.exports = {
  create,
  getAll,
};
