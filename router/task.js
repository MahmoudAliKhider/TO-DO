const express = require('express')
const router = express.Router();
const Task = require("../model/task")
//Add new task
router.post('/add',(req,res,next)=>{
   return res.send("Add task")
})
//list own task 
router.post('/list',(req,res,next)=>{
    res.send("list task")
})
//delete task
router.delete('/remove/:id',(req,res,next)=>{
    res.send("remove")
})


module.exports=router
