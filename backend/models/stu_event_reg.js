const mongoose = require("mongoose");

const event_reg_Schema = new mongoose.Schema({
  name : String,
  enroll : String,
  email : String,
  phone : String,
  message : String,

  event_name: String,
  event_date: String,
  event_time: String,
  event_location: String
});


module.exports = mongoose.model("event_reg" , event_reg_Schema);
