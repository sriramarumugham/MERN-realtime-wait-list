const router = require("express").Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: "api runnig" });
});

router.get('/home'  , (req, res)=>{
  return res.status(200).json({message:"you are a authenticated user"});
})
router.use("/auth", require("./auth"));
router.use('/user' , require('./user'));



module.exports = router;
