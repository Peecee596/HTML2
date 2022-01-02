const mongoose =require('mongoose')
const User=mongoose.model("User",mongoose.Schema({
    name:String,
    email:String,
    password:String,
    roles:[
        {
            type:mongoose.Schema.Types.ObjectId,            
            ref:"Role"
        }
    ]
}))
module.exports=User;