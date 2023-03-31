const mongoose=require('mongoose');
require('dotenv').config();

const db=async()=>{
    try{
        let connection= await mongoose.connect(process.env.MONGO_URL).then(()=>{
            console.log("db connected");
        })
    }
    catch(err){
        throw new Error(err)
    }
  
    
}

module.exports=db;