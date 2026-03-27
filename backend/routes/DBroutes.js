const express = require("express");
const mongoose = require("mongoose"); 
const Account = require("../models/schema");
const router = express.Router();

router.post("/", async(req , res) => {
   try{
     const { name, enroll, course, department, email, password } = req.body;
     const accexist = await Account.findOne({ enroll : enroll});
     

     if(accexist){
        console.log("duplicate data");
         return res.status(400).json({ message: "⚠️ EnRoll number already exists!" });
     }

     const newAccount = new Account({ name,enroll,course,department,email,password});
     await newAccount.save();

    res.json({Massage : "New user account save"});
    console.log("✅ Data send succsfylly ");
  }
  catch(error){
      console.error("!Faild to account save " , error);  
      res.status(500).json({ error: "Failed to save account" });
      console.log("sonthing went wrong");
  }
});


router.post("/login" , async(req , res) => {
   
  try{
      const{Enroll , password} = req.body;
      const user = await Account.findOne({enroll: Enroll , password});
  
      if(user){
        res.json({ message: "Login Successful", user });
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


// router.get("/count", async (req, res) => {
//     try {
//         const studentCount = await Account.countDocuments();

//         console.log("Total Students:", studentCount);

//         res.send("Counts printed in console");
//     }
//     catch(err) {
//         console.log("Error while counting:", err);
//         res.status(500).send("Error");
//     }
// });


module.exports=router;