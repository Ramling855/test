const express =require("express")
const app=express();
const form=require("./router/form")
const cors=require("cors");
const fileuploadRouter = require("./router/photo");
app.use(cors());
app.use(express.json())
app.use(express.static("./router/data"))

app.use("/form",form)
app.use("/photo",fileuploadRouter)

module.exports=app