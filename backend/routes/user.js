const router = require("express").Router();

const {protected} =require('../middleware/protected');
const {userInfo} =require('../controller/userController');
const { sendEMail } = require("../controller/Nodemailer");


router.get("/get-info" , protected ,  userInfo);
router.get("/get-otp" , protected ,  sendEMail);



module.exports = router;
