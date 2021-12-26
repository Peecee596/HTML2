const express=require('express')
const app=express()

app.get("/",(req,res)=>{
    res.send("Welcome to the Express-PORT @ 2000")
})

const PORT=2000;
app.listen(PORT,()=>{
    console.log(`SERVER started at PORT ${PORT}`)
})