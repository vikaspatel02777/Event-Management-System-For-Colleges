const mongoose = require('mongoose');

const connectDB = async () =>{
  try{
         await mongoose.connect('mongodb://localhost:27017/event');

         console.log("🥳 mongoDB connect Sucessfully 🥳 ");         
  }
  catch (error){
         console.log("**🤬 Loda bhenchoo 🤬 mongoDB not connected", error );
  }
};

module.exports = connectDB;