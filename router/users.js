const express = require('express')
const user = require('../model/user')
const router = express.Router()
const User = require('../model/user')

router.get('/auth',(req,res,next)=>{
    res.send("Login")
})


router.post('/register',(req,res,next)=>{
    let newUser = User({
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