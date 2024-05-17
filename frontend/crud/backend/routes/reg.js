const express=require('express')
const RegModel=require('../models/reg-model')
const bodyParser=require('body-parser')
const router=express.Router()

router.use(bodyParser.json())


router.post('/post',(req,res)=>{
    const newReg = new RegModel(req.body)
    newReg.save()
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
    res.send("post page")
})


module.exports=router