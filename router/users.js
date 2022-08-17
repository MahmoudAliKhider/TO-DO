const express = require('express')
const user = require('../model/user')
const router = express.Router()
// const User = require('../model/user')

router.post('/auth',(req,res,next)=>{
    const email =req.body.email;
    const password = req.body.password;

    const query = {email:email}

    user.findOne(query,(err,user)=>{
        if(err){
            return res.send({
                success:false,
                message:"failed to connected"
            })
           
        }
        if(!user){
            return res.send({
                success:false,
            message:"failed: create new account"
            })
            
        }
        user.isPasswordMatch(password,user.password,(err,isMatch)=>{
            if(!isMatch){
                return res.send({
                    success:false,
                message:"failed: enValid Password"
                })
            }
            return res.send({
                success:true,
                message:"You can login naw",
                user:user
            })
        })
    })

})


router.post('/register',(req,res,next)=>{
    let newUser = user({
     name:req.body.name,
     email: req.body.email,
     password : req.body.password
    })

    newUser.save((err,user)=>{
        if(err){
            return res.send({
                success:false,
                message:"failed to save user"
        })
       
        }
        res.send({
            success:true,
            message:"ok",
            user:user
        })
    })
  
})




module.exports=router;