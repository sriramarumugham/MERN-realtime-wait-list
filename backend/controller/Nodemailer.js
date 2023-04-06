const nodemailer= require('nodemailer');
require('dotenv').config();


const sendEMail=(req, res)=>{
    const transporter = nodemailer.createTransport({
      service: 'gmail', 
      secure:false,      
        auth: {
          user: process.env.EMAIL,
          pass: process.env.PASSWORD
        }
    });

    

     const mailOptions = {
        from: process.env.EMAIL,// sender address
        to: "sriramlibra0@gmail.com", // list of receivers
        subject: "test subject", // Subject line
        text:"test desciption ",
       
    };

    transporter.sendMail(mailOptions).then((info)=>{
      return res.status(201).json({
        msg: "you should receive an email",
        info : info,
      })
    }).catch(error => {
      return res.status(500).json({ error })
  })
}
module.exports={sendEMail}; 