const express=require('express')
const bodyParser=require('body-parser')
const cors=require('cors')
const app=express();
const PORT=5000;

var corsOptions={
    origin:true
}

app.use(cors(corsOptions))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))


app.get('/',(req,res)=>{
    res.send("Welcome to JWT Express Server")
})

app.listen(PORT,()=>{
    console.log(`Server is running at Port ${PORT}`)
})