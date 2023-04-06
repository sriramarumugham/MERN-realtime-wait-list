const router = require("express").Router();


const { sendEMail } = require("../controller/Nodemailer");

const {protected} =require('../middleware/protected');


const OTP=require('../model/UserOTP');

router.get("/", (req, res) => {
  res.status(200).json({ message: "api runnig" });
});

router.get('/home'  , (req, res)=>{
  return res.status(200).json({message:"you are a authenticated user"});
})
router.use("/auth", require("./auth"));
router.use('/user' , require('./user'));


//testing route for time to live mongoose schema
router.get('/create-otp' ,  async(req , res)=>{
  const newOtp= await OTP.create({
    id:11111 , otp:111
  })
  console.log(newOtp);
  res.send(newOtp);
})


module.exports = router;
