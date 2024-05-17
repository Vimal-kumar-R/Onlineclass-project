const mongoose=require('mongoose')

const regSchema=new mongoose.Schema({
    username:String,
    email:String,
    phonenumber:Number,
    qualification:String,
    graduationYear:Number,
    city:String,
    State:String,
})

const RegModel=mongoose.model('RegDatas',regSchema)

module.exports=RegModel