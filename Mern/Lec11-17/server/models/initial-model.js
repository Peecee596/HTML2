const db=require('../models')
const Role=db.role;
module.exports=initial=()=>{
    Role.estimatedDocumentCount((err,count)=>{
        if(!err && count===0)
        {
            new Role({
                name:"user"
            }).save(err=>{
                if(err){
                    console.log("error",err)
                }
            })
            console.log("Added user to the roles collection")

            new Role({
                name:"moderator"
            }).save(err=>{
                if(err){
                    console.log("error",err)
                }
            })
            console.log("Added moderator in the roles collection")

            new Role({
                name:"Admin"
            }).save(err=>{
                if(err){
                    console.log("error",err)
                }
            })
            console.log("Added Admin in the roles collection")
        }
    })
}
