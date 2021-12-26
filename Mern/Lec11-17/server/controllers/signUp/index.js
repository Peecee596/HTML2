const config=require('../../config/auth.config')
const db=require('../../models')

const User=db.user
const Role=db.role

var jwt=require('jsonwebtoken')
var bcrypt=require('bcryptjs')

exports.signUp=(req,res)=>{
    const user=new User({
        username:req.body.username,
        email:req.body.email,
        password:bcrypt.hashSync(req.body.password,8)
    })
    user.save((err,user)=>{
        if(err){
            res.status(500).send({message:err})
            return;
        }
        if(req.body.roles){
            Role.find({ name: { $in: req.body.roles}},(err,roles)=>{
        if(err){
                    res.status(500).send({message:err})
                    return;
                }
                user.roles=roles.map(role=>role._id)
                user.save(err=>{
                    if(err){
                        res.status(500).send({message:err})
                        return;
                    }
                    res.send({message:"User has been registered successfully"})
                })

            })
        }
        else{
            Role.findOne({name:"user"},(err,role)=>{
                if(err){
                    res.status(500).send({message:err})
                }
                user.roles=[role._id]
                user.save(err=>{
                    if(err){
                        res.status(500).send({message:err})
                        return;
                    }
                    res.send({message:"User was registered Successfully"})
                })

            })
        }
    })
}
