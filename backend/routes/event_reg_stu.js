const express = require("express");
const mongoose = require("mongoose"); 
const Account = require("../models/stu_event_reg");
const event_reg_router = express.Router();


event_reg_router.post("/", async(req , res) => {
try{
const { name, enroll, email, phone,message,
        event_name,event_date, event_time,event_location} = req.body;

     const accexist = await Account.findOne({  event_name : event_name, enroll: enroll});
     

     if(accexist){
        console.log("duplicate data");
         return res.status(400).json({ message: "⚠️ Already Registered!" });
     }

     const newAccount = new Account({ name, enroll, email, phone, message, 
                                      event_name,event_date, event_time,event_location});
     await newAccount.save();

    res.json({Massage : "New Register save"});
    console.log("✅ Data send succsfylly ");
  }
  catch(error){
      console.error("!Faild to event_register_data save " , error);  
      res.status(500).json({ error: "Failed to event_register_data save" });
      console.log("sonthing went wrong");
  }
});

event_reg_router.get("/", async (req, res) => {
  try {
     const enroll = req.query.enroll;
     // If enroll is provided, filter by it; otherwise, return all.
     const filter = enroll ? { enroll } : {};
     const events_reg = await Account.find(filter).sort({ createdAt: -1 }); 
     res.json(events_reg);
  } catch (error) {
     console.error("Failed to fetch events", error);
     res.status(500).json({ error: "Failed to fetch events" });
  }
});

module.exports=event_reg_router;
