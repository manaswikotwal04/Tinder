const express=require('express');
const app=express();


app.get("/user",(req,res) => {
    res.send({firstname:"John",lastname:"Doe"});
});
app.post("/user",(req,res) => {
    console.log(req.body);
    res.send("User created successfully");
});
app.use("/Hello",(req,res) => {
    res.send("Hello from Hello route");
});
app.use("/test", (req,res) => {
    res.send("Hello from server");
});
app.use("/",(req,res) =>{
    res.send("Hello World from dashbpard");
});
app.listen(3000,() =>{
    console.log("Server is running on port 3000");
});