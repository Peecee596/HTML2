const db=require('../models')
const Role=db.role;
const User=db.user;

CheckDuplicateEmailOrUser=(req,res,next)=>{
User.findOne({username:req.body.username}).exec((err,user)=>{
    if(err){
        res.stautus(500).send({message:err})
        return;
    }
    if(user){
        res.status(400).send({message:`User Already Exists`})
        return;
    }
    next();
})

}
User.findOne({email:req.body.email}).exec((err,user)=>{
    if(err){
        res.status(500).send({message:err})
        return;
    }
    if(user){
        res.status(400).send({message:`Email Already Exists`})
    }
})
CheckRoleExisted=(req,res,user)=>{
    if(req.body.roles){
        for(let i=0;i<=req.body.roles.length;i++){
            if(!Roles.include(req.body.roles[i])){
                res.status(500).send({message:`failed ${req.body.roles} doesnt exists`})
                return;
            }
        }
        next();
    }

}

const verifySignup={
    CheckDuplicateEmailOrUser,
    CheckRoleExisted
}
module.exports=verifySignup;