const buildingsRepository = require("../repositories/buildings");

const create = async (buildings) => {
  console.log(buildings);
  return await buildingsRepository.create(buildings);
};

const getAll = async () => {
  return await buildingsRepository.getAll();
};

module.exports = {
  create,
  getAll,
};
