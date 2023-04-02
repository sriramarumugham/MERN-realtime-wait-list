const User = require("../model/User");

const register = async (req, res) => {
  const { name, email, password } = req.body.user;
  if (!name || !email || !password) {
    return res.status(300).json({ message: "fill all fealds" });
  }
  try {
    // check if the user already exist;
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      return res
        .status(409)
        .json({ message: "User alredy exist please login" });
    } else {
      const createdUser = await User.create({ name, email, password });
      console.log(createdUser);
      return res.status(200).json({ user: createdUser });
    }
  } catch (err) {
    return res.status(400).json({ message: err });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body.user;
  if ( !email || !password) {
    return res.status(300).json({ message: "fill all fealds" });
  }
  try {
    // check if the user already exist;
    const existingUser = await User.findOne({ email: email });
    if (!existingUser) {
      return res
        .status(404)
        .json({ message: "User dosent exist please register" });
    } else {
      
    }
  } catch (err) {
    return res.status(400).json({ message: err });
  }
};

module.exports = { login, register };