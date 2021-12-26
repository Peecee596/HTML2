const express=require('express')
const app=express()

const bodyParser=require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

const cors=require("cors")
var corsOptions={
    origin:true
}
app.use(cors(corsOptions))
app.get("/",(req,res)=>{
    res.send('Welcome to JWT Express Server')
})
const PORT=4000;
app.listen(PORT,()=>{
    console.log(`Server Started at port ${PORT}`)
})