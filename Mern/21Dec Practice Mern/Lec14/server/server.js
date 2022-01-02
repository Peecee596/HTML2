const express=require('express')
const app=express()

app.get("/",(req,res)=>{
    res.send(`Welcome to Express Server-Lec14-Creating Middlewares`)
})
//db connection
const db=require('./models')
db.mongoose.connect(db.url,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(data=>{console.log("Connected to the database")})
.catch(err=>{console.log(`Failed!Cant be connected - ${err}`)})
const PORT=1000;
app.listen(PORT,()=>{
    console.log(`server started at PORT ${PORT}`)
})