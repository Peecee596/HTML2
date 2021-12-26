const mongoose=require('mongoose')
const db=require("../config/db.config")

const User=mongoose.model("User",mongoose.Schema({
    username:String,
    email:String,
    password:String,
    roles:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Role"
    }]

}))
module.exports=User;
