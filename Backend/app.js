const { response } = require("express");
const express = require("express");
var app = express();
var cors = require("cors");
app.use(cors());
app.use("/", (req, res) => {
  console.log(req.url);
  res.send("Hello1");
  res.end();
});

app.use("/home", (req, res) => {
  console.log(req.url);
  res.send("Home2");
  res.end();
});

app.listen(8000, (req, res) => {
  console.log("Server Listening on 8000");
});
