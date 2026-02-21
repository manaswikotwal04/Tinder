const mongoose = require("mongoose");
const validator=require("validator");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
const userSchema = new  mongoose.Schema({
  firstName: {
    type: String,
    required:true,
    minLength:4,
    maxLength:10
  },
  lastName: {
    type: String,
  },
  emailId: {
    type: String,
    required:true,
    unique:true,
    trim:true,
    validate(value){
      if(!validator.isEmail(value)){
        throw new Error("Email is not valid");
      }   
    }
  },
  password: {
    type: String,
    required:true,
    validate(value){
      if(!validator.isStrongPassword(value)){
        throw new Error("Password is not strong");
      }   
    }
  },
  age: {
    type: Number,

  },
  gender: { 
    type: String,
    validate(value){
        if(!['male','female','others'].includes(value)){
            throw new Error("Gender date not valid");
        }
    }
  },
  photourl:{
    type:String,
    default:"https://sclpa.com/wp-content/uploads/2022/10/dummy-img-1.jpg",
    validate(value){
      if(!validator.isURL(value)){
        throw new Error("photo url is not valid");
      }
    }

  },
  about:{
    type:String,
    default:"Hello this is default value"
  },
  skills:{
    type:[String]
  }
},
{
  timestamps:true
});
userSchema.methods.getJWT=async function(){
  const user=this;
  const token=await jwt.sign({_id:user._id},"Dev@Tinder$790",{expiresIn:"1d"});
  return token;

}
userSchema.methods.validatePassword=async function(password){
  const user=this;
  const isPasswordMatch=await bcrypt.compare(password,user.password);
  return isPasswordMatch;
}
const User= mongoose.model("User", userSchema);
module.exports=User;