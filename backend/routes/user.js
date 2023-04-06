const router = require("express").Router();


const {protected} =require('../middleware/protected');

const {userInfo} =require('../controller/userController');

router.get("/get-info" ,protected ,  userInfo);



module.exports = router;
