const express=require('express')
const app=express();

const mongoose=require('mongoose')

mongoose.connect("mongodb+srv://Poonam:poonam@news.y51nk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority").then(()=>{console.log('DB connected')})

app.get("/",(req,res)=>{
    res.send("Welcome to the Mongoose Server")
})
const PORT=1000;
app.listen(PORT,()=>{
    console.log(`Server started at Port ${PORT}`)
})