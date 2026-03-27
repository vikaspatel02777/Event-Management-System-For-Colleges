const mongoose = require("mongoose");

const organizerSchema = new mongoose.Schema({
  name: String,
  org_id: String,
  role: String,
  department: String,
  email: String,
  phone: String,
  password: String
});

module.exports = mongoose.model("Organizer", organizerSchema);
