const express =require("express")
const{getdata,postdata,deletedata,updatedata}=require("../controller/formuser")
const form=express.Router();
form.get("/getall",getdata)
form.post("/postall",postdata)
form.delete("/deleteall/:id",deletedata)
form.put("/updateall/:id",updatedata)

module.exports=form;
