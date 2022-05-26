//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs"); // ejs documentation

app.get("/", function (req, res) {
  res.send("<h1>Hello</h1>");
});

app.listen(3000, function () {
  console.log("Server started on port 3000.");
});
