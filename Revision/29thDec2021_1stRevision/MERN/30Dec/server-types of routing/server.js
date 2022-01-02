const express=require('express')
const app=express()

app.get("/",(req,res)=>{
    res.send(`Welcome to Express Server`)
})
//Static Route
app.get("/about",(req,res)=>{
    res.send(`Welcome to Static page`)
})
//dynamic Route
app.get("/users/:id",(req,res)=>{
    const id=req.params.id;
    res.send(`User Registered with id ${id}`)
})
//controllers Route
const controllers=require('./controllers/controllers')
app.get("/products",controllers.products)

//404 Route
app.use("/",(req,res,next)=>{
    res.status(404).send(`Sorry Page not found`)
})
const PORT=2000;
app.listen(PORT,()=>{
    console.log(`Server started PORT at ${PORT}`)
})
