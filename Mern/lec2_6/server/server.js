const express =require('express')
const app=express()

//Static Routes
app.get('/',(req,res)=>{
    res.send("Welcome to express server")
})
//Dynamic Routes

app.get('/users/:id',(req,res)=>{
    const id=req.params.id
    res.send(`Ur user id is ${id}`)
})
//Controller

const controller=require('./Controllers/controller')
app.get('/products',controller.products)

//Page 404
app.use(function(req,res,next){
    res.status(404).send("Sorry,Page Not Exists")
})



const PORT=3000;
app.listen(PORT,()=>{
    console.log(`Server started at ${PORT}`)
})