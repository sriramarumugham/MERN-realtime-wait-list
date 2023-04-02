const { login, register } = require("../controller/authController");

const router = require("express").Router();

router.get("/login", (req, res) => {
  res.send("login successul");
});

router.post("/register", register);

module.exports = router;
