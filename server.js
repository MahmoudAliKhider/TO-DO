require('dotenv').config();
const express = require('express')
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
const userRouter = require('./router/users')
const taskRouter = require('./router/task')
const passport = require("passport")
const session = require('express-session');

const app = express();
try {
    const connect =  mongoose.connect("mongodb://0.0.0.0:27017/todoapp",{
        useNewUrlParser:true
    }).connection

        console.log("connected")
    } catch (error) {
        process.exit(1);
      console.error(error);
    }

//middelware///
app.use(bodyparser.json())

//app.use(session({  }));
//app.use(express.session({ secret: 'SECRET' })); 
app.use(session({ secret: 'melody hensley is my spirit animal' }));
app.use(passport.initialize())
app.use(passport.session())

require('./config/passport')(passport)




app.get('/',(req,res,next)=>{
    res.send("Mahmoud Ali khider")
})
app.use("/user",userRouter)
app.use("/task",taskRouter)



 const _port= 3000;
 app.listen(_port ,()=>{
    console.log(`connected in port 3000 `)
 } )