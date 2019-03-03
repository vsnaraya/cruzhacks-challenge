var Hacker = require("../models/hacker");
var express = require("express");
var router = express.Router();
//homepage route
router.get("/", function(req, res) {
  res.send("Welcome to the Hacker Homepage!");
});

//index route to show all hackers in the database
router.get("/hackers", function(req, res) {
  Hacker.find({}, function(err, hackers) {
    if (err) {
      console.log(err);
    } else {
      res.send(hackers);
    }
  });
});
//show route for specific hacker
router.get("/hackers/:id", function(req, res) {
  var id = req.params.id;
  Hacker.findById(id, function(err, hacker) {
    if (err) {
      console.log(err);
      res.send("hacker not found");
    } else {
      console.log(hacker);
      res.send(hacker);
    }
  });
});
//post request to create new hacker
router.post("/hackers", function(req, res) {
  var name = req.body.name;
  var email = req.body.email;
  var major = req.body.major;
  var age = req.body.age;
  var newHacker = {
    name: name,
    email: email,
    major: major,
    age: age
  };
  // console.log(newHacker);
  Hacker.create(newHacker, function(err, newlyCreated) {
    if (err) {
      console.log(error);
    } else {
      console.log(newlyCreated);
      res.redirect("/hackers");
    }
  });
});

module.exports = router;
