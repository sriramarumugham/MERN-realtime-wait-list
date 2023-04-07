const jwt = require("jsonwebtoken");
require('dotenv').config;

//sends a signed jwt token 
const signJswtToken=(data)=>{
    let jwtSecret=process.env.JWT_SECTET;
    let token =jwt.sign(data, jwtSecret);
    return token;
}
module.exports=signJswtToken;
