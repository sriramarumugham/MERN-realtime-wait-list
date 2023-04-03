const jwt = require("jsonwebtoken");

const User = require("../model/User");
const protected = async (req, res, next) => {
  try{
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {

    let token =  req.headers.authorization.split(" ")[1];

    let jwtSecretKey = process.env.JWT_SECTET;

    const  verified =   jwt.verify(token, jwtSecretKey);
    if (verified) {
        let isValid = await User.findById({ _id: verified._id });
        if (isValid) {
        // console.log("protected verified", isValid);
        req.user=isValid._id;
        console.log(req.user);
          next();
        }
        else{
             res.status(400).send({message:"user dosent exist"});
        }
    } else {
      // Access Denied
      return res.status(401).send(error);
    }

    
  }
  else{
    return res.status(401).send({"message" : "required token"});
  }
  }
  catch (err) {
    return res.status(401).send(err);
  }

};
module.exports = { protected };
