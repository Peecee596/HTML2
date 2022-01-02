const db=require('../models')
const Role=db.role

module.exports=initial=()=>{
    
    Role.estimatedDocumentCount((err,count)=>{
    if(!err&&count===0){
        new Role({name:"user"}).save(err=>{if(err){console.log("error",err)}})
    }
    console.log("Added User to the Role collection")

    new Role({name:"moderator"}).save(err=>{if(err){console.log("error",err)}})
    console.log("Added Moderator to the Role collection")

    new Role({name:"admin"}).save(err=>{if(err){console.log("error",err)}})
    console.log("Added Admin to the Role collection")

   })
        
}
