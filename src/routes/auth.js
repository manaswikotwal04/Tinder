const express = require('express');
const approuter=express.Router();
const bcrypt=require("bcrypt");
const User=require('../models/user');

const {validationissignupdata}=require("../utils/validation");
approuter.post("/signup",async (req,res)=>{
    try{
    validationissignupdata(req);

    const {firstName,lastName,emailId,password}=req.body;
    const passwordHash=await bcrypt.hash(password,10);

    const user=new User({firstName,lastName,emailId,password:passwordHash});
    await user.save();
    res.send("user created successfully"); 
  }catch(err){
    res.status(400).send({ error: err.message });
    console.log("error saving user",err);
  }
 
});
approuter.post("/login",async(req,res)=>{
  const {emailId,password}=req.body;
  try{
    const user=await User.findOne({emailId:emailId});
    if(!user){
      throw new Error("user not found");
    }
    const isPasswordMatch=await user.validatePassword(password);
    if(isPasswordMatch){
    const token = await user.getJWT();
      res.cookie("token", token, {
  httpOnly: true,
  expires: new Date(Date.now() + 24 * 60 * 60 * 1000)
});
      res.send("Login successful");
    }
    else{
      throw new Error("invalid credentials");
    }
  }catch(err){
    res.status(400).send({ error: err.message });

  }
});
approuter.post("/logout",async(req,res)=>{
res.cookie("token"," ",{expires:new Date(Date.now())});
res.send("Logout successful");
});
module.exports=approuter;