const db=require('../model')
const config=require('../config/auth.config')
const jwt=require('jsonwebtoken')


const Role=db.user//index.js
const User=db.role//index.js

verifyToken=(req,res,next)=>{
    let token=req.headers("x-access-token");
    if(!token){res.status(403).send({message:`No Token Provided`})}
    jwt.verify(token,config.secret,(err,decoded)=>{
        if(err){
            res.status(400).send({message:`Unauthorized User, Kinldy enter correct details`})
            return;
        }
        req.userId=decoded.id;
    })
}
isAdmin=(req,res,next)=>{
    User.findById(req.userId).exec((err,user)=>{
        if(err){res.status(500).send({message:err})}
    })
    Role.find({_id:{$in:user.roles}},(err,roles)=>{
        if(err){res.status(500).send({message:err})}
        
        for(let i=0;i<roles.length;i++){
            if(roles[i].name==='admin'){
                next();
                return;
            }
        }
        res.status(403).send({message:"Requires Admin Role"})
    })
}
isModerator=(req,res,next)=>{
    User.findById(req.userId).exec((err,user)=>{
        if(err){res.status(500).send({message:err})}
    })
    Role.find({_id:user.roles},(err,roles)=>{
        if(err){res.status(500).send({message:err})}

        for(let i=0;i<roles.length;i++){
            if(roles[i].name==="moderator"){
                next();
                return;
            }
        }
        res.status(403).send({message:`Requires Moderator Role`})
    })
}
const authJWT={
    verifyToken,
    isAdmin,
    isModerator
}
module.exports=authJWT;