const dbconfig=require('../config/db.config')
const mongoose=require('mongoose')
const db={}
db.mongoose=mongoose
db.url=dbconfig.url
db.News=require('./news.model')(mongoose)

module.exports=db;