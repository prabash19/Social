const keys = require("./keys");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors("*"));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("server working");
});

app.listen(5000, (err) => {
  console.log("backend running on 5000");
});
