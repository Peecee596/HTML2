const db=require('../model')
const Roles=db.Roles//index.js
const User=db.user//index.js

checkDuplicateUsernameorEmail=(req,res,next)=>{
    User.findOne({username:req.body.username}).exec((err,username)=>{
        if(err){
            res.status(500).send({message:err})
            return;
        }        
        if(username){
            res.status(400).send({message:`Failed Username Already exists`})
            return; 
        }           
    })

    User.findOne({email:req.body.email}).exec((err,email)=>{
        if(err){
            res.status(500).send({message:err})
            return;
        }
        if(email){
            res.status(400).send({message:`Email Id Already exists`})
            return;
        }
        //next();
    })

}
checkRolesExisted=(res,req,next)=>{
    if(req.body.roles){
        for(i=0;i<req.body.roles.length;i++){
            if(!Roles.includes(req.body.roles[i])){
                res.status(400).send({message:`Failed Roles ${req.body.roles[i]} doesnot exists`})
                return;
            }
        }
    }
    next();
}
const verifySignUp={
    checkDuplicateUsernameorEmail,
    checkRolesExisted
}
module.exports=verifySignUp;