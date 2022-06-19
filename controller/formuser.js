
const mode=require("../model/model")
const getdata=(req,res)=>{
mode.find()
    .then(data=>res.json({data:data})).catch(err=>console.log(err))


}
const fs=require("fs");
var cloudinary = require('cloudinary').v2;

cloudinary.config({ 
    
    cloud_name: 'ccompony', 
    api_key: '449366357236654', 
    api_secret: 'p5nO_GgBqddAr6fOryOr6zhB2UQ',
    secure: true
  });




const postdata=(req,res,next)=>{
    // console.log(req)

// const splitArray=req.files.file.path.split("/")

var imageFile = req.files.file.path;
console.log(imageFile,"fillllllllr")
cloudinary.uploader.upload(imageFile, 
function(error, result) {
    if(error){
        console.log(error);
    }
    else{
        const user=new mode({
            name:req.body.name,
            email:req.body.email,
            phone:req.body.phone,
            education:req.body.education,
            address:req.body.address,
            salary:req.body.salary,
            location:req.body.location,
            job:req.body.job,
            photo:result.url,
           // profilePicture:splitArray[splitArray.length-1]
            //  profilePicture:result.url
      
        })
      
        user.save().then(data=>{
      
        ///  sendEmail(data.email,"success");
        fs.unlink(imageFile,()=>{
            console.log("file deleted");

            res.json({
                message:"Successfully registered"
            })
        })
      
      
        
        }).catch(err=>{
      
          next(err);
      
        })
    }
   

});






}
// const postdata=(req,res)=>{
//     console.log(req)
//     const user=new mode(req.body)
//     user.save().then(()=>console.log("data posted"))
//     .catch((err)=>console.log(err))
//     }


const deletedata=(req,res)=>{
    console.log(req.params.id)
    mode.findByIdAndDelete({_id:req.params.id}).then(()=>console.log("data deleted")).catch(()=>console.log("errr delete"))
}
const updatedata=(req,res)=>{
    var data=req.body.values
    console.log(data)
    mode.findByIdAndUpdate({_id:req.params.id},{$set:{name:data.name,email:data.email}})
    .then(()=>console.log("updated")).catch(()=>console.log("update err"))
}
module.exports={getdata,postdata,deletedata,updatedata}