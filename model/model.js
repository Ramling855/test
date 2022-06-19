const mongoose =require("mongoose")
const Model=new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String,
    },
    address:{
        type:String,
    },
    phone:{
        type:String,
    },
    education:{
        type:String,
    },
    photo:{
        type:String,
    }
})
const mode= mongoose.model("form",Model)
module.exports=mode;
