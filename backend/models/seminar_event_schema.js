const mongoose = require("mongoose");

const seminar_eventSchema = new mongoose.Schema({
    db_type: {
        type: String, default: "seminar"
    },
    name: {
        type: String,
    },
    category: {
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

module.exports = mongoose.model("seminar_event", seminar_eventSchema);
