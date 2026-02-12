const express = require('express');

const connectdb=require('./config/db');
const app = express();
const User=require('./models/user');

app.post("/signup",async (req,res)=>{
  const user=new User({
    firstName:"virat",
    lastName:"kholi",
    emailId:"virat@gmail.com",
    password:"kholi18",
    age:18,
    gender:"female"
  });
  try{
    await user.save();
    res.send("user created successfully"); 
  }catch(err){
    console.log("error saving user",err);
  }
 
});

connectdb().then(()=>{
    console.log("connected to db");
    app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

}).catch((err)=>{
    console.log("error connecting to db",err);
});

