require('dotenv').config();
const express = require('express')
const mongoose = require('mongoose')
const bodyparser = require('body-parser')

const app = express();
try {
    const connect =  mongoose.connect(process.env.DATABASE,{
        useNewUrlParser:true
    }).connection

        console.log("connected")
    } catch (error) {
        process.exit(1);
      console.error(error);
    }

app.use(bodyparser.json())


 const _port= process.env.PORT
 app.listen(_port ,()=>{
    console.log(`connected in port 3000 `)
 } )