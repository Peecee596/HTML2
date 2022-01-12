const express=require('express')
const app=express()

const bodyParser=require('body-parser')
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

const cors=require('cors')
var corsOption={
    origin:true
}
app.use(cors(corsOption))


app.get("/",(req,res)=>{
    res.send("Welcome to the express server")
})

//Database connection
const db=require('./model')
db.mongoose.connect(db.url,{
    useNewUrlParser:true,
    useUnifiedToplogy:true
}).then(()=>{
    console.log("Connected to the server")
}).catch(err=>{console.log("Failed to connect with the server")})

const init=require('./model/init-model')
init();
const PORT=5000;
app.listen(PORT,()=>{
    console.log(`Server started at PORT ${PORT}`)
})