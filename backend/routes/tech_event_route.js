const express = require("express");
const mongoose = require("mongoose");
const Account = require("../models/tech_event_schema");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, category, type, date, time, location, seats, desc } = req.body;
    const accexist = await Account.findOne({ name: name });


    if (accexist) {
      console.log("duplicate data");
      return res.status(400).json({ message: "⚠️ Event already exists!" });
    }

    const newAccount = new Account({ name, category, type, date, time, location, seats, desc });
    await newAccount.save();

    res.json({ Massage: "New user account save" });
    console.log("✅ Data send succsfylly ");
  }
  catch (error) {
    console.error("!Faild to account save ", error);
    res.status(500).json({ error: "Failed to save account" });
    console.log("sonthing went wrong");
  }
});

router.get("/", async (req, res) => {
  try {
    const events = await Account.find().sort({ createdAt: -1 });
    res.json(events);
  } catch (error) {
    console.error("Failed to fetch events", error);
    res.status(500).json({ error: "Failed to fetch events" });
  }
});


router.patch("/:id", async (req, res) => {
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

module.exports = router;