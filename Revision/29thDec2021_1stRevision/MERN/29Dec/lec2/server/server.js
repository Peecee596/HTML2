const express=require('express')
const app=express()

app.get("/",(req,res)=>{
    res.send("Welcome to the Express Server")
})
const PORT=1000;
app.listen(PORT,()=>{
    console.log(`Server started at Port ${PORT}`)
})