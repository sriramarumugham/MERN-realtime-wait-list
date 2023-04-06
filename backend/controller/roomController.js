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
          { $inc: { score: -10 } },
          { new: true }
        );
        // send the new list realime

        console.log(updatedReferredUser);

        //check if he is a winner

        if (updatedReferredUser.score <= 1) {
          let updatedUser = await User.findOneAndUpdate(
            { email: user.email },
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

          transporter
            .sendMail(mailOptions)
            .then((info) => {
              console.log(info);
              return res.status(201).json({
                message: "you should receive an email",
                email: info,
              });
            })
            .catch((error) => {
              return res.status(500).json({ error });
            });
        }
      }
    }
    //creat a room for a user the add the user to the room give him score;

    let randomeCode = generateReferral(6);
    console.log(randomeCode);

    let createdRoom = await Room.create({
      user: user,
      score: 100,
      referralCode: randomeCode,
    });
    console.log("createdRoom", createdRoom);

    let updatedUser = await User.findOneAndUpdate(
      { email: user.email },
      { joinedRoom: true },
      { new: true }
    );

    console.log("updatedUser", updatedUser);

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
    let scores = await Room.find().populate("user").sort({ score: -1 });
    return res.status(200).json({ scores: scores });
  } catch (err) {
    console.log(err);
    return res.status(404).json({ message: err });
  }
};

module.exports = { joinRoom, getScores };
