require('dotenv').config();


//sender  email and password for nodemailer smpt transporter 
const emailConfig = {
  service: "gmail",
  secure: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
};

module.exports = { emailConfig };
