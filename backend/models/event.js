const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
    db_type: {
        type: String, default: "event"
    },
    event_name: {
        type: String,
    },
    event_type: {
        type: String,
    },
    event_date: {
        type: String,
    },
    event_time: {
        type: String,
    },
    event_location: {
        type: String,
    },
    event_seats: {
        type: String,
    },
    event_discription: {
        type: String,
    },
    status: {
        type: String, default: "pending"
    },
    correction_msg: {
        type: String, default: ""
    }
});

module.exports = mongoose.model("event", eventSchema);
