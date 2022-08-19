const express = require('express')
const router = express.Router();
const Task = require("../model/task")
const passport = require('passport');

//Add new task
router.post('/add', passport.authenticate('jwt',{session:false}),(req,res,next)=>{
  const task = new Task({
    name: req.body.name,
    done: req.body.done,
    owner: req.body.owner
  })
  task.save((err,task)=>{
    if(err){
        res.send({
            success:false,
            message:"Error while save please try again"
        })
    }
    if(!task){
        res.send({
            success:false,
            message:"Failed to save"
        })
    }
    res.send({
        success:true,
        task,
        message:"task save"
    })
  })
})



//list own task 
router.post('/list', passport.authenticate('jwt',{session:false}),(req,res,next)=>{
   const owner = req.body.owner;
   Task.find({ owner },(err,tasks)=>{
    if(err){
        
        return res.send({
            success:false,
            message:"Error while reteriving the task "
        })
    }
    if(!tasks){
        if(err){
         return   res.send({
                success:false,
                message:"you don`t have task"
            })
        }
    }
   
      return  res.send({
            success:true,
            tasks
        })
    
   })
})


//delete task
router.delete('/remove/:id',passport.authenticate('jwt',{session:false}),(req,res,next)=>{
   const taskId = req.params.id;
   Task.remove({_id:taskId},(err)=>{
    if(err){
       return res.send({
            success:false,
            message:"Error while delete please, try again"
        })
    }
   
      return  res.send({
            success:true,
            message:"deleted Done"
        })
    
   })
})


module.exports=router
