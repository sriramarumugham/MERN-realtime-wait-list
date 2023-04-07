const jwt = require("jsonwebtoken");

const User = require("../model/User");

//jwt passed in header
const protected = async (req, res, next) => {
  try {
    //check if the token is send in the header
    // if token is not send redirects to login from the client
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      //get the token from request header
      let token = req.headers.authorization.split(" ")[1];

      //gets secret from env
      let jwtSecretKey = process.env.JWT_SECTET;

      //matched the token with secret
      const verified = jwt.verify(token, jwtSecretKey);
      if (verified) {

        //if token valid , then chek if the id is present in the db

        let isValid = await User.findById({ _id: verified._id });

        if (isValid) {
          //pass on to the next function by calling next();
          console.log("protected middleware verified jwt");
          req.user = isValid;
          next();
        } else {
          //if the id donest exist , menas user is playing with jwt 
          res.status(400).send({ message: "user dosent exist" });
        }
      } else {
        // Access Denied
        return res.status(401).send(error);
      }
    } else {
      return res.status(401).send({ message: "required token" });
    }
  } catch (err) {
    return res.status(401).send(err);
  }
};
module.exports = { protected };
