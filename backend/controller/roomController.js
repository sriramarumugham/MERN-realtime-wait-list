const Room = require("../model/Room");
const User = require("../model/User");
const nodemailer = require("nodemailer");

const { emailConfig } = require("../config/nodemailer");
require("dotenv").config();

const joinRoom = async (req, res) => {
  try {
    const user = req.user;

    const { referral } = req.body;
    console.log("referral contoller", referral);

    //increase the score for the referred user;

    if (referral.length > 0) {
      let referredUser = await Room.findOne({ referralCode: referral });

      if (referredUser) {
        let updatedReferredUser = await Room.findOneAndUpdate(
          { _id: referredUser.id },
          { $inc: { score: -100 } },
          { new: true }
        );

        console.log("updated Referred Users socre" , updatedReferredUser.score);

        //check if he is a winner

        if (updatedReferredUser.score <= 1) {
          let updatedUser = await User.findOneAndUpdate(
            { _id: updatedReferredUser.user },
            { winner: true },
            { new: true }
          );
          console.log("winner");
          console.log("sending email");

          const transporter = nodemailer.createTransport(emailConfig);
          const mailOptions = {
            from: process.env.EMAIL, // sender address
            to: updatedUser.email, // list of receivers
            subject: " 25percent offer", // Subject line
            html: `<p>You  25% off on  a iphone</p> `,
          };

          const info = await transporter.sendMail(mailOptions);
          console.log("email sent to winner", info);
        }
      }
    }
    //creat a room for a user the add the user to the room give him score;

    let randomeCode = generateReferral(6);
    console.log("generated referral code", randomeCode);

    let createdRoom = await Room.create({
      user: user,
      score: 100,
      referralCode: randomeCode,
    });
    console.log("createdRoom");

    let updatedUser = await User.findOneAndUpdate(
      { email: user.email },
      { joinedRoom: true },
      { new: true }
    );

    console.log("updatedUser");

    return res.status(200).json({
      message: "joined the room ",
      user: {
        email: updatedUser.email,
        verified: updatedUser.verified,
        joinedRoom: updatedUser.joinedRoom,
        winner: updatedUser.winner,
      },
      room: {
        score: createdRoom.score,
        referralCode: createdRoom.referralCode,
      },
    });

    // realtime update
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: error });
  }
};

const generateReferral = (length) => {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWZYZ0123456789";

  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

const getScores = async (req, res) => {
  try {
    let scores = await Room.find().populate("user").sort({ score: 1 });
    return res.status(200).json({ scores: scores });
  } catch (err) {
    console.log(err);
    return res.status(404).json({ message: err });
  }
};
module.exports = { joinRoom, getScores };

// https://www.freecodecamp.org/news/build-a-realtime-chat-app-with-react-express-socketio-and-harperdb/
