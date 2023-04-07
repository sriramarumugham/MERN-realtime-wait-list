const { emailConfig } = require("../config/nodemailer");
const Room = require("../model/Room");
const User = require("../model/User");
const nodemailer = require("nodemailer");

require("dotenv").config();

const joinRoom = async (req, res) => {
  try {
    const user = req.user;

    const { referral } = req.body;

    console.log("referral checking");

    //increase the score for the referred user;

    if (referral.length > 0) {
      let referredUser = await Room.findOne({ referralCode: referral });

      //send rewards to referred users;
      if (referredUser) {
        let result = await referredUserRewards(referredUser);
        if (!result) {
          console.log("Coudnt send the rewards for referred user");
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
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: error });
  }
};

//util for sending email and increasing the score
const referredUserRewards = async (referredUser) => {
  try {
    let updatedReferredUser = await Room.findOneAndUpdate(
      { _id: referredUser.id },
      { $inc: { score: -100 } },
      { new: true }
    );

    console.log("updated Referred Users socre", updatedReferredUser.score);

    //check if he is a winner
    if (updatedReferredUser.score <= 1) {
      //
      //declare him winner and send him a email
      //
      let updatedUser = await User.findOneAndUpdate(
        { _id: updatedReferredUser.user },
        { winner: true },
        { new: true }
      );
      console.log("winner  , sending email");

      //send him a email
      const transporter = nodemailer.createTransport(emailConfig);
      const mailOptions = {
        from: process.env.EMAIL, // sender address
        to: updatedUser.email, // list of receivers
        subject: " 25percent offer", // Subject line
        html: `
        <div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2">
        <div style="margin:50px auto;width:70%;padding:20px 0">
          <div style="border-bottom:1px solid #eee">
            <a href="" style="font-size:1.4em;color: #00466a;text-decoration:none;font-weight:600">Early registration iPhone 14</a>
          </div>
          <p style="font-size:1.1em">Hi, ${updatedUser.name}</p>
          <p></p>
          <p style="font-size:0.9em;">Regards,<br />Congratulations, you've won an iPhone 14</p>
          <hr style="border:none;border-top:1px solid #eee" />
          <div style="float:right;padding:8px 0;color:#aaa;font-size:0.8em;line-height:1;font-weight:300">
            <p>Realtime Waiting list</p>
            <p>Sriram arumugham</p>
            <a href="https://github.com/sriramarumugham/">gitHub profile</a>
          </div>
        </div>
      </div>`,
      };

      const info = await transporter.sendMail(mailOptions);
      console.log("email sent to winner", info);
    }
  } catch (error) {
    console.log("Error in rewards", error);
    return error;
  }
};

//to generate random referral code
const generateReferral = (length) => {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWZYZ0123456789";

  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

//get the udpated leaderboard
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
