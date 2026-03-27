const express = require("express");
const mongoose = require("mongoose"); 
const Account = require("../models/orgschema");
const orgrouter = express.Router();

//organizer register
orgrouter.post("/", async(req , res) => {
   try{
     const { name, org_id, role, department, email, phone, password } = req.body;
     const accexist = await Account.findOne({ org_id : org_id});
     

     if(accexist){
        console.log("duplicate data");
         return res.status(400).json({ message: "⚠️ Organizer already exists!" });
     }

     const newAccount = new Account({ name, org_id, role, department, email, phone, password});
     await newAccount.save();

    res.json({Massage : "New organizer account save"});
    console.log("✅ Data send succsfylly ");
  }
  catch(error){
      console.error("!Faild to account save " , error);  
      res.status(500).json({ error: "Failed to save account" });
      console.log("sonthing went wrong");
  }
});


//organizer login
orgrouter.post("/login" , async(req , res) => {
   
  try{
      const{org_id , password} = req.body;
      const user = await Account.findOne({ org_id: org_id, password: password });
      if(user){
        res.json({ message: "Login Successful", user });
        console.log("data matched" , user);
      }
      else{
        console.log("not match");
         return res.status(400).json({ error: "Invalid enroll or password" });
      }
  }
  catch(err){
    console.log("faile to responce : ", err);
  }
});



module.exports= orgrouter;