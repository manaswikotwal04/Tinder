const express = require('express');
const profilerouter = express.Router();
const { UserAuth } = require('../middlewares/auth');
const { validationeditprofiledata } = require('../utils/validation');

profilerouter.get("/profile/view",UserAuth, async(req,res,next)=>{
  try{

const user=req.user;

 
  res.send(user);
}catch(err){
  res.status(401).send("Unauthorized");
} 
});
profilerouter.patch("/profile/edit",UserAuth,async(req,res)=>{
try{
    if(!validationeditprofiledata(req)){
        return res.status(400).send("Invalid data");
    }
    const user=req.user;
  
    Object.keys(req.body).forEach((key)=>(user[key]=req.body[key]));
    await user.save();
    res.send("Profile updated successfully");
}catch(err){
    return res.status(400).send(err.message);    
}
});
module.exports=profilerouter;