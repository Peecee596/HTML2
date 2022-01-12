const mongoose=require('mongoose')
const config=require('../config/db.config')

mongoose.Promise=global.Promise;

const db={}//5 Properties
db.mongoose=mongoose
db.url=config.url,
db.user=require('./user.model')
db.role=require('./roles.model')
db.Roles=["admin","moderator","user"]

module.exports=db;
