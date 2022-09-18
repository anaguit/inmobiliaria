const buildingsService = require("../services/buildings");

const create = async (req, res, next) => {
  try {
    const newBuildings = await buildingsService.create(req.body);
    res.status(200).json({
      msg: " Buldings create successfully",
      data: newBuildings,
    });
  } catch (error) {
    next(error);
  }
};

const getAll = async (req, res, next) => {
  try {
    const response = await buildingsService.getAll();
    res.status(200).json({
      msg: "All buldings",
      data: response,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  create,
  getAll,
};
