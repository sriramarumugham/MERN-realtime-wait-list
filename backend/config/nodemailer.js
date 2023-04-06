require('dotenv').config();


const emailConfig = {
  service: "gmail",
  secure: false,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
};

module.exports = { emailConfig };
