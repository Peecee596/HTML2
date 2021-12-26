const express= require("express")
const app=express();
const mongoose=require('mongoose')

mongoose.connect('mongodb+srv://Poonam:poonam@news.y51nk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
.then(()=>{console.log("DB Connected")})

//static Routes
app.get("/",(req,res)=>{
    res.send("Welcome to the session 3-Different types of Routes")
})

app.get("/about",(req,res)=>{
    res.send("This is an static route example")
})

//Dynamic Routes

app.get("/users/:id",(req,res)=>{
const id =req.params.id;
res.send(`Dynamic Route start at User ID ${id}`)
})

//Using Controllers
const controller=require('./contoller')
app.get("/products",controller.products)

//404 Route

app.use((req,res,next)=>{
    res.status(400).send("Page Not Found")
})

const PORT=3000;
app.listen(PORT,()=>{
    console.log(`Connected to the PORT ${PORT}`)
})