const {joinRoom  , getScores} =require('../controller/roomController');
const {protected} =require('../middleware/protected');
const router = require("express").Router();

router.post('/join' , protected, joinRoom);
router.get('/get' , protected, getScores);



module.exports = router;
