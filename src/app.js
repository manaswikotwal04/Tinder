const express = require('express');


const app = express();
const{adminAuth,UserAuth} = require("./middlewares/auth");

// Middleware for all admin routes
app.use("/admin", adminAuth);
app.use("/user", UserAuth);
// app.use("/user", UserAuth, (req, res) => {
//   res.send("This is user data");
// });
app.post("/user/login", (req, res) => {
  res.send("User logged in");
});
app.get("/user/data",UserAuth, (req, res) => {
  res.send("This is  data");
}
);


// Admin routes
app.get("/admin/getAllData", (req, res) => {
  res.send("This is admin data");
});

app.get("/admin/deleteAllData", (req, res) => {
  res.send("All data deleted");
});



app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
