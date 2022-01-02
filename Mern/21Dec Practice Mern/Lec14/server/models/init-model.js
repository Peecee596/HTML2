const db=require('../models')
const Roles=db.Role
module.exports=init=()=>{
Role.estimatedDocumentCount((err,count)=>{
    if(!err && count==0){
        new Role({
            name:"user"
        }).save(err=>{
            if(err){
                console.log("error",err)
            }
            else{
                console.log("Added user to the user collection")
            }
            new Role({
                name:"moderator"
            }).save(err=>{
                if(err){
                    console.log("error",err)
                }
                else{
                    console.log("Added moderator to the user collection")
                }
                new Role({
                    name:"admin"
                }).save(err=>{
                    if(err){
                        console.log("error",err)
                    }
                    else{
                        console.log("Added admin to the roles collection")
                    }
                })
            })

        })
    }
    console.log()
})
}