const express = require("express");
const router = express.Router();
const buildingsController = require("../controllers/buildings");

router.post("/", buildingsController.create);
router.get("/", buildingsController.getAll);

module.exports = router;
