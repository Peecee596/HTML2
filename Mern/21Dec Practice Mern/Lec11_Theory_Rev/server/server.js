// const express=require('express')
// const app=express();

// const bodyParser=require('body-parser')
// app.use(bodyParser.urlencoded({extended:true}))
// app.use(bodyParser.json())

// const cors=require('cors')
// var corsOptions={
//     origin:true
// }
// app.use(cors(corsOptions))

// app.get("/",(req,res)=>{
//     res.send("Welcome to the Revision-Lec1-Lec10")
// })
// //static route
// app.get("/static",(req,res)=>{
//     res.send("This is our static route example")
// })
// //dynamic route
// app.get("/dynamic/:id",(req,res)=>{
//     const id=req.params.id;
//     res.send(`This is out dynamic route working at given no ${id}`)
// })
// //controller route
// const controller=require('./controllers/controllersroute');

// app.get("/controllers",(controller.controllerroute))


// //connect database
// const db=require('./models')
// db.mongoose.connect(db.url,{
//     useNewUrlParser:true,
//     useUnifiedTopology: true
// }).then(()=>{
//     console.log("Connected to the server")
// }).catch(err=>{
//     console.log(`${err}-Connection Failed`)
//     process.exit()
// })
// //router
// require('./routes/news.routes')(app)
// // //404 route
// // app.use("/",(req,res,next)=>{
// //     res.status(404).send(`Sorry! Page not found`)
// //     })
    
// const PORT=2000;
// app.listen(PORT,()=>{
//     console.log(`Server running at PORT ${PORT}`)
// })


const express=require('express')
const app=express()

const bodyParser=require('body-parser')
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

const cors=require('cors')
const Corsoptions={origin:true}
app.use(cors(Corsoptions))

app.get("/",(req,res)=>{
    res.send(`Checking-using Postman`)
})
//connect database
const db=require('./models')
db.mongoose.connect(db.url,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{console.log("Connected to Database")})
.catch(err=>{console.log("Connection failed")})

require('./routes/news.routes')(app)

const PORT=2000;
app.listen(PORT,()=>{console.log(`Server started at Port ${PORT}`)})