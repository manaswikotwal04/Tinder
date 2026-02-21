const express = require('express');
const cookieParser = require("cookie-parser");
const connectdb=require('./config/db');
const app = express();
const authrouter=require("./routes/auth");
const profilerouter=require("./routes/profile");
const requestrouter=require("./routes/request");

app.use(express.json());
app.use(cookieParser());  
app.use("/",authrouter);
app.use("/",profilerouter);
app.use("/",requestrouter);
connectdb().then(()=>{
    console.log("connected to db");
    app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

}).catch((err)=>{
    console.log("error connecting to db",err);
});

