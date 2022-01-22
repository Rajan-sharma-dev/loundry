const express =require('express')
const bcrypt=require('bcryptjs')
const bodyParser = require('body-parser');
const app=express()
app.use(bodyParser());

const router=express.Router()
console.log("create")


const User=require('../modals/user')


router.post('/registers',async(req,res)=>{
    console.log(req.body)
    const { name,email,phone,password,cpassword,pincode,state,district,address } =req.body
        if(!name || !email || !phone || !password || !cpassword || !pincode || !state || !district || !address){
             res.json({status:failed,message:"invalid creaditanls"})
        }
    try{
        
        const userExist =await User.findOne({email:email})
        console.log(userExist)
        if(userExist){
             res.json({status:failed,message:"invalid creaditanls"})
        }else if(password!==cpassword){
             res.json({status:failed,message:"invalid creaditanls"})

        }
        console.log(name,email,phone,password,cpassword,pincode,state,district,address)
        const user =  new User({name,email,phone,password,cpassword,state,district,address,pincode})
        console.log(user,'uuu')
        
        const userRegister=  user.save()
        console.log(userRegister)

        if(userRegister){
            res.json({status:'success',message:"sign up success",user:userRegister})

        }
        else{
            res.json({status:"failed",message:"invalid creditianls"})
        }

    }
    catch(err){
        res.json({status:"failed",message:"err.message"})
      
    }


})

module.exports = router;