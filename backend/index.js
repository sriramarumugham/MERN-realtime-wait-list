require("dotenv").config();

const express = require("express");
const app = express();
const db = require("./conifig/mongoose");

db();


const PORT=process.env.PORT || 8000;

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
    throw new Error(err);
  }

  console.log("express app runnig on port", PORT);
});
