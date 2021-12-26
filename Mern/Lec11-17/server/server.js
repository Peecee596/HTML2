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
    res.send(`Welcomeee to JWT Express Server`)
})
//database connection
const db=require('./models')
db.mongoose.connect(db.url,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{console.log("Connected to Database")})
.catch(err=>{
            console.log("Connection failed")
            process.exit()
        })

const init=require('./models/initial-model')
init()

//routes
require('./routes/auth.routes')(app)
const PORT=4000;
app.listen(PORT,()=>{
console.log(`Server started at POrt ${PORT}`)
})