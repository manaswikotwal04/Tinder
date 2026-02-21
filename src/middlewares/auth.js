
const jwt=require("jsonwebtoken");
const User=require("../models/user");
const UserAuth = async(req, res, next) => {
  try{
  const {token}=req.cookies;
  if(!token){
    return res.status(401).send("token not valid");
  }
  const decoded= await jwt.verify(token,"Dev@Tinder$790");
  const {_id}=decoded;
  const user=await User.findById(_id);
  if(!user){
    return res.status(401).send("Unauthorized user");
  }
  req.user=user;
  next();
}catch(err){
  res.status(401).send(err.message);
  
};
};

module.exports={ UserAuth };
