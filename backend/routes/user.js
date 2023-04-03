const router = require("express").Router();

const {protected} =require('../middleware/protected');
router.get("/get-info" ,protected ,  (req, res)=>{
    return res.send('user info')
});



module.exports = router;
