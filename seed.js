//function to seed database on server start
Hacker = require("./models/hacker");
function seedDatabase() {
  Hacker.create(
    {
      name: "Hacker hack",
      email: "hack@ucsc.edu",
      major: "Computer Science",
      age: 20
    },
    function(err, hacker) {
      if (err) {
        console.log(err);
      } else {
        console.log(hacker);
      }
    }
  );
  Hacker.create(
    {
      name: "Banana Slug",
      email: "slug@gmail.com",
      major: "Biology",
      age: 87
    },
    function(err, hacker) {
      if (err) {
        console.log(err);
      } else {
        console.log(hacker);
      }
    }
  );
  Hacker.create(
    {
      name: "Steph Curry",
      email: "steph@yahoo.com",
      major: "Business",
      age: 30
    },
    function(err, hacker) {
      if (err) {
        console.log(err);
      } else {
        console.log(hacker);
      }
    }
  );
  Hacker.create(
    {
      name: "Billy bob",
      email: "billrocks@bill.com",
      major: "undeclared",
      age: 23
    },
    function(err, hacker) {
      if (err) {
        console.log(err);
      } else {
        console.log(hacker);
      }
    }
  );
}

module.exports = {
  seedDatabase
};
