const mongoose=require("mongoose")

const employeeSchema=new mongoose.Schema({
    username:{type:String,required:true},
    emailAddress:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    confirmPassword:{type:String,required:true},
    mobileNumber:{type:String,required:true,unique:true},
    nationalIdentityNumber:{type:String,required:true,unique:true},
    residenceNumber:{type:String,required:true,unique:true},
    fax:{type:String,required:true},
    role:{type:String,required:true},
    subsidary:{type:String,required:true}
})

//creating the collection

const Users=new mongoose.model('user',employeeSchema)

module.exports=Users