const mongoose=require("mongoose");
const dbconnect=(URL)=>{
 return mongoose.connect(URL)
}
module.exports=dbconnect;