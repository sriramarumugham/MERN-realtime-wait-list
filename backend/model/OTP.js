const mongoose = require("mongoose");
const UserOTPSchema = new mongoose.Schema(
  {
    email:{
      type:String,
      require:true
    },
    otp: {
      type: Number,
      require: true,
    },
    // 5 min expiry
    expireAt: { type: Date, default: Date.now() + 5 * 60 * 1000 },
  },
  { timestamps: true }
);

const OTP = mongoose.model("OTP", UserOTPSchema);
module.exports = OTP;
