require("dotenv").config();

const express = require("express");
const app = express();
const db = require("./conifig/mongoose");
const cors = require("cors");
const bodyParser=require('body-parser');

db();

const PORT = process.env.PORT || 8000;

// logger middleware
app.use(cors({ origin: "*", methods: "GET,HEAD,PUT,PATCH,POST,DELETE" }));

app.use(bodyParser());


app.use((req, res, next) => {
  console.log(req.session, req.cookies);
  next();
});

app.use("/", require("./routes/index"));

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
    throw new Error(err);
  }

  console.log("express app runnig on port", PORT);
});
