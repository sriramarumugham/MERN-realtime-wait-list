const passport = require("passport");
const { login, register } = require("../controller/authController");

const router = require("express").Router();

router.post("/login",  login);

router.post("/register", register);

module.exports = router;
