require("dotenv").config()
const app=require("./app")
const dbconnect=require("./db")
const port=process.env.PORT||8000


dbconnect(process.env.URL).then(()=>{
    console.log("mongo connected")
    app.listen(port,()=>{
        console.log("server started at "+port)
    }) 
    
})
.catch((err)=>console.log(err))

