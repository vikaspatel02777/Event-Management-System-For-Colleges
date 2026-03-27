const mongoose = require("mongoose");

const culturel_eventSchema = new mongoose.Schema({
    db_type: {
        type: String, default: "culturel"
    },
    name: {
        type: String,
    },
    type: {
        type: String,
    },
    date: {
        type: String,
    },
    time: {
        type: String,
    },
    location: {
        type: String,
    },
    seats: {
        type: String,
    },
    desc: {
        type: String,
    },
    status: {
        type: String, default: "pending"
    },
    correction_msg: {
        type: String, default: ""
    }
});

module.exports = mongoose.model("culturel_event", culturel_eventSchema);
