const mongoose=require ('mongoose');

const connectdb=async()=>{
  await  mongoose.connect("mongodb+srv://manaswikotwal04_db_user:Manaswi2004!@namastenode.n8dmiyj.mongodb.net/TinderDB");
};
module.exports=connectdb;