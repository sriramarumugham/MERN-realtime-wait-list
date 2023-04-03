require("dotenv").config();

const express = require("express");
const app = express();
const db = require("./config/mongoose");
const cors = require("cors");
const session = require("express-session");
const cookieParser = require("cookie-parser");
db();

const PORT = process.env.PORT || 8000;


app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    // credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
  })
);



// logger middleware

// app.use((req, res, next) => {
//   console.log(req.session , req.user);
//   next();
// });

app.use("/", require("./routes/index"));

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
    throw new Error(err);
  }

  console.log("express app runnig on port", PORT);
});
