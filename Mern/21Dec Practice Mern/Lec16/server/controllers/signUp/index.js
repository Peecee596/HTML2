const config=require('../../config/auth.config')
const db=require('../../model')
const User=db.user
const Role=db.role


var jwt=require('jsonwebtoken')
var bycrypt=require('bcryptjs')

exports.signup=(req,res)=>{
    const user=new User({
        username:req.body.username,
        email:req.body.email,
        password:bycrypt.hashSync(req.body.password,8)

    })
    user.save((err,newuser)=>{
        if(err){return res.status(500).send({message:err})}
        if(req.body.roles){
            Role.find({name:{$in:req.body.roles}},(err,roles)=>{
                if(err){return res.status(500).send({message:err})}
                user.roles=roles.map(role=>role._id)
                newuser.save(err=>{
                    if(err){return res.status(500).send({message:err})}
                    res.send({message:"New User Registered Successfully"})
                })
            })
        }
        else{
            Role.find({name:"user"},(err,roles)=>{
                if(err){return res.status(500).send({message:err})}
                user.roles=[roles._id]
                newuser.save(err=>{
                    if(err){return res.status(500).send({message:err})}
                    res.send({message:"New user which is not admin or moderator added"})
                })

            })
        }
    })
}