const config=require('../../config/auth.config')
const db=require('../../model')
const User=db.user
const Role=db.role

var jwt=require('jsonwebtoken')
var bycrypt=require('bcryptjs')

exports.signin=(req,res)=>{
    User.findOne({username:req.body.username}).populate("roles","___v").exec((err,user)=>{
        if(err){return res.status(500).send({message:err})}
        if(!user){return res.status(404).send({message:err})}

        var passwordIsValid=bycrypt.compareSync(req.body.password,user.password)
        if(!passwordIsValid){return res.status(401).send({accessToken:null,message:"Invalid Password"})}

        var token=jwt.sign({id:user.id},config.secret,{expiresIn:86400})

        var authorities=[];
        for(let i=0;i<user.roles.length;i++){
            authorities.push("ROLE_"+user.roles[i].name.toUpperCase())
        }
        res.status(200).send({
            id:user._id,
            username:user.username,
            email:user.email,
            roles:authorities,
            accessToken:token
        })
    })
}