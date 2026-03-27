const mongoose = require("mongoose");

const accountSchema = new mongoose.Schema({
  name : String,
  enroll : String,
  course : String,
  depatment : String,
  email : String,
  password : String,

});


module.exports = mongoose.model("Account" , accountSchema);
