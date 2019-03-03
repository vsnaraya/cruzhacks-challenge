var mongoose = require("mongoose");
//hacker data model
var hackerSchema = new mongoose.Schema({
  id: mongoose.Types.ObjectId,
  name: String,
  email: String,
  major: String,
  age: Number
});

module.exports = mongoose.model("Hacker", hackerSchema);
