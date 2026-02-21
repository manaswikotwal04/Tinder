const validator=require("validator");

const validationissignupdata=(req)=>{
    const {firstName,lastName,emailId,password}=req.body;
    if(!firstName || !lastName){
        throw new Error("first name and last name is required");
    }else if(!validator.isEmail(emailId)){
        throw new Error("email is not valid");
    }else if(!validator.isStrongPassword(password)){
        throw new Error("password is not strong");
    }
};
const validationeditprofiledata=(req)=>{


    const allowedFields=["firstName","lastName","age","gender","photourl","about","skills"];
    const isValid=Object.keys(req.body).every(feild => allowedFields.includes(feild));
     return isValid;
}
module.exports={
    validationissignupdata,
    validationeditprofiledata
};
