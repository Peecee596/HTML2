const mongoose=require('mongoose')
const db=require('../model')
const Role=db.role;//index.js

module.exports=initial=()=>{
    //estimates the number of documents in the MongoDB collection
    Role.estimatedDocumentCount((err,count)=>{
        if(!err && count==0){
            new Role({
                name:"User"
            }).save(err=>{console.log("error",err)})
            console.log("Added User to the roles Model to the roles collection")

            new Role({
                name:"Moderator"
            }).save(err=>{console.log("error",err)})
            console.log("Added moderator to the roles colletion")

            new Role({
                name:"Admin"
            }).save(err=>{console.log("error",err)})
            console.log("Added Admin to the Roles Collection")
                
    }
    })
}