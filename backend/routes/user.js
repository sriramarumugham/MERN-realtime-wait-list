const router = require("express").Router();

const {protected} =require('../middleware/protected');
const {userInfo} =require('../controller/userController');
const { sendEMail , createOtp , verifyOtp } = require("../controller/otpController");


router.get("/get-info" , protected ,  userInfo);

router.get("/get-otp" , protected ,  createOtp ,sendEMail);

router.post('/verify-otp' , protected , verifyOtp );


module.exports = router;
