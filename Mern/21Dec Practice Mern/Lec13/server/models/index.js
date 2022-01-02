//const db=require('../models')
const dbconfig=require('../config/db.config')
const mongoose=require("mongoose")


mongoose.Promise=global.Promise
const db={}

db.mongoose=mongoose;
db.url=dbconfig.url
db.user=require('../models/users.model')
db.role=require('../models/roles.model')
db.Role=["user","moderator","admin"]

module.exports=db;