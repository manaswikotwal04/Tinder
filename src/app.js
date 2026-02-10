const express=require('express');
const app=express();
app.use("/",(req,res) =>{
    res.send("Hello World from dashbpard");
});
app.use("/Hello",(req,res) => {
    res.send("Hello from Hello route");
});
app.use("/test", (req,res) => {
    res.send("Hello from server");
});
app.listen(3000,() =>{
    console.log("Server is running on port 3000");
});