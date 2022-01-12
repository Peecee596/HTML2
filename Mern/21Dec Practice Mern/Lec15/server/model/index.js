const mongoose=require('mongoose')
const config=require('../config/config')
mongoose.Promise=global.Promise;
const db={};
db.mongoose=mongoose
db.config=config.url
db.user=require('./users.model')
db.role=require('./roles.model')
Role=["user","moderator","admin"]

module.exports=db;
