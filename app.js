//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
// const path = require("path");

// requiring our date.js
const date = require(__dirname + "/date.js");
const app = express();
const items = []; // todo item array. Able to push into a const array. Inside object or arrays can be changed, however array can't be re-assigned
const workList = []; // work todo

app.set("view engine", "ejs"); // ejs documentation
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

// GET Route

// first home route
app.get("/", function (req, res) {
  // passing data from server
  const day = date.getDate();
  res.render("newlist", { listTitle: day, newListItems: items });
});

// work list

app.get("/work", function (req, res) {
  res.render("newlist", { listTitle: "Work List", newListItems: workList });
});

app.get("/about", function (req, res) {
  res.render("about");
});

// POST Route

app.post("/", function (req, res) {
  const item = req.body.newItem;
  console.log(req.body);
  if (req.body.list === "Work") {
    workList.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    // console.log(items);
    // res.send("Check log");
    res.redirect("/");
  }
});

app.listen(3000, function () {
  console.log("Server started on port 3000.");
});
