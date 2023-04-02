const router = require("express").Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: "api runnig" });
});

router.use("/auth", require("./auth"));

module.exports = router;
