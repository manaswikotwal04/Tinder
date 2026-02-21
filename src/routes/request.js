const express = require('express');
const requestrouter=express.Router();
const { UserAuth } = require('../middlewares/auth');

requestrouter.post("/sendConnectionRequest",UserAuth,async(req,res)=>{
    const user=req.user;
    console.log("Sending a connection request");
    res.send(user.firstName+" sent a connection request");
});
module.exports=requestrouter;   