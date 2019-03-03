var express = require("express");
var app = express();
var hackerRoutes = require("./routes/hackerRoutes");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var seed = require("./seed");

mongoose.connect("mongodb://localhost:27017/cruzHacks", {
  useNewUrlParser: true
});
app.use(bodyParser.urlencoded({ extended: true }));

app.use(hackerRoutes);

//listen on port 3000
app.listen(3000, function() {
  console.log("The Hacker Server has Started!");
  seed.seedDatabase(); //initial seed of database
});
