const express=require('express')
const app=express()


app.get("/",(req,res)=>{
    res.send("Welcome to the express server")
})

const PORT=5000;
app.listen(PORT,()=>{
    console.log(`Server started at PORT ${PORT}`)
})