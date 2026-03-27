const express = require("express");
const mongoose = require("mongoose");
const Account = require("../models/event");
const event_router = express.Router();

// event creation 

event_router.post("/", async (req, res) => {
  try {
    const { event_name, event_date, event_time, event_location, event_seats, event_discription } = req.body;
    const accexist = await Account.findOne({ event_name: event_name });


    if (accexist) {
      console.log("duplicate data");
      return res.status(400).json({ message: "⚠️ Event already exists!" });
    }

    const newEvent = new Account({ event_name, event_date, event_time, event_location, event_seats, event_discription });
    console.log(newEvent);
    await newEvent.save();

    res.json({ Massage: "Event Created" });
    console.log("✅ Data send succsfylly ");
  }
  catch (error) {
    console.error("!Faild to creat event ", error);
    res.status(500).json({ error: "Failed to creat event" });
    console.log("sonthing went wrong");
  }
});

event_router.get("/", async (req, res) => {
  try {
    const events = await Account.find().sort({ createdAt: -1 });
    res.json(events);
  } catch (error) {
    console.error("Failed to fetch events", error);
    res.status(500).json({ error: "Failed to fetch events" });
  }
});

event_router.patch("/:id", async (req, res) => {
  try {
    const updated = await Account.findByIdAndUpdate(req.params.id,
      { status: req.body.status, correction_msg: req.body.correction_msg },
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ error: "Event not found" });
    }

    res.json(updated);

  } catch (err) {
    console.error("PATCH ERROR:", err);
    res.status(500).json({ error: "Update failed", details: err.message });
  }
});


module.exports = event_router;