const express =require("express")
const{getdata,postdata,deletedata,updatedata}=require("../controller/formuser")
const form=express.Router();


const path=require("path")
const multipart =require("connect-multiparty")
// var multipart = require('connect-multiparty');
var multipartMiddleware = multipart({ uploadDir: path.join(__dirname,"data") });
form.get("/getall",getdata)
form.post("/postall",multipartMiddleware,postdata)
form.delete("/deleteall/:id",deletedata)
form.put("/updateall/:id",updatedata)

module.exports=form;
