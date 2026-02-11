const adminAuth = (req, res, next) => {
  const token = "xyz";
  const isAdminAuthorized = token === "xyz";
console.log("Admin Auth Middleware: Token received ");
  if (!isAdminAuthorized) {
    return res.status(401).send("Admin Unauthorized");
  }else{
    next();
  }
};

const UserAuth = (req, res, next) => {
  const token = "xyz1";
  const isUserAuthorized = token === "xyz1";   // ✅ correct check

  if (!isUserAuthorized) {
    return res.status(401).send("User Unauthorized");
  }else{
    next();
  } 
};

module.exports = { adminAuth, UserAuth };
