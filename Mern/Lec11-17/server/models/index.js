const mongoose=require('mongoose')
const config=require('../config/db.config')

mongoose.Promise=global.Promise
const db={}
db.mongoose=mongoose
db.url=config.url
db.user=require('./users.model')
db.role=require('./roles.model')
db.Roles=["user","admin","moderator"]
module.exports=db;