const mongoose = require("mongoose")
const bcrypt = require('bcryptjs')

const userSchema = mongoose.Schema({
    name:String,
    email:{type:String,require:true},
    password:{ type : String , require: true}
})
userSchema.pre('save', function(next){
    //generate salt value
    bcrypt.genSalt(10,(err,salt)=>{
        if(err){
            return nodeTest(err)
        }

        //use this salt value to hash password
        bcrypt.hash(this.password,salt,(err,hash)=>{
           if(err){
            return next(error)
           }
           this.password=hash;
           next();
        })
    })
})
userSchema.methods.isPasswordMatch = function(plainPassword , hashed , callback){
    bcrypt.compare(plainPassword,hashed,(err,isMatch)=>{
        if(err){
         next(err)
        }
        callback(null,isMatch)
    })
}

module.exports=mongoose.model('User',userSchema)