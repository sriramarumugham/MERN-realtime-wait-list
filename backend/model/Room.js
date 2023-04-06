const mongoose = require("mongoose");

const RoomSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      require:true
    },
    score: {
      type: Number,
      default: 100,
    },
    referralCode: {
      type: String,
      unique: true,
    },
  },
  { timestamps: true }
);

const Room = mongoose.model("Room", RoomSchema);
module.exports = Room;
