require("dotenv").config();

const express = require("express");
const db = require("./config/mongoose");
const cors = require("cors");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const socketio = require("socket.io");
const PORT = process.env.PORT || 8000;
const Room=require('./model/Room');
db();

const app = express();

app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    // credentials: true,
  })
);

const server = require("http").Server(app);
const io = socketio(server, {
  cors: {
    origin: "*",
  },
});

app.use(cookieParser());
app.use(express.json());
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
  })
);

//routes
app.use("/", require("./routes/index"));

server.listen(PORT, () => {
  console.log("server running on port", PORT);
});

io.on("connection", (socket) => {
  console.log(`Socket ${socket.id} connected`);

  socket.on("update-leaderboard", async (leaderboard) => {
    try{
      let scores = await Room.find().populate("user").sort({ score: 1 });
    console.log(scores);
      io.emit("updated-leaderboard", scores);
    }
    catch(error){
      console.log("scoket couldnt get scores", error);
    }  
  });
  socket.on("disconnect", (socket) => {
    console.log(`socket ${socket.id} disconnected`);
  });
});
