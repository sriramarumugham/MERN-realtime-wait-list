const User = require("../model/User");

const signJswtToken = require("../config/jwt");


// register new user 
const register = async (req, res) => {
  const { name, email, password } = req.body.user;

  //check name emial and password send by client
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

      //crates a new user
      const createdUser = await User.create({ name, email, password });
      console.log("user created");
      return res.status(200).json({ user: createdUser });
    }
  } catch (err) {

    return res.status(400).json({ message: err });
  }
};

//create a session for the user
const login = async (req, res) => {
  const { email, password } = req.body.user;
  //check email and password send by client
  if (!email || !password) {
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
      //check password match
      if (password != existingUser.password) {
        return res.status(504).json({ message: "password or email incorrect" });
      }

      let user = existingUser.toJSON();

      //get a signed token by passing the user information from the jwt in config folder
      let token = signJswtToken(user);

      //sends the user with the token to store it in cookei|| session|| local storage
      res.send({ message: "Logged in", token: token });
    }
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: err });
  }
};



module.exports = { login, register };
