const jwt=require('jsonwebtoken')
const crypto=require('crypto')

//creating random key
const JWT_KEY = crypto.randomBytes(32).toString('hex');


//generating token
const generateToken=id=>{
     return jwt.sign({id},JWT_KEY,{expiresIn:"10d"} )
}

module.exports=generateToken;