const express = require("express");
const router = express.Router();
const buildingsRouter = require("./buildings.routes");

router.get("/", (req, res) => {
  res.json({ message: "inmobiliaria funcionando" });
});
router.use("/buildings", buildingsRouter);

module.exports = router;
