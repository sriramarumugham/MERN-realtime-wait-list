const router = require("express").Router();


const { sendEMail } = require("../controller/otpController");

const {protected} =require('../middleware/protected');


const OTP=require('../model/OTP');

router.get("/", (req, res) => {
  res.status(200).json({ message: "api runnig" });
});

router.get('/home'  , (req, res)=>{
  return res.status(200).json({message:"you are a authenticated user"});
})
router.use("/auth", require("./auth"));
router.use('/user' , require('./user'));


//testing route for time to live mongoose schema



module.exports = router;
