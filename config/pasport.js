const jwtStrategy = require("passport-jwt").Strategy;
const jwtExtract = require("passport-jwt").ExtractJwt;
const User = require("../model/user")
module.exports=function(passport){
let opts={};
opts.jwtFromRequest=jwtExtract.fromAuthHeaderAsBearerToken();
opts.secretOrKew =process.env.SECRET;

passport.use(new jwtStrategy (opts,(jwt_payload,done)=>{

    User.findById(jwt_payload.use.id,(err,user)=>{
        if(err){
            return done(err,false)
        }
        if(user){
            return done(null,user)
        }
    })
})
)
}

