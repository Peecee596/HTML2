const express=require('express')
const app=express()

const bodyParser=require('body-parser')
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

const cors=require('cors')
var corsOptions={origin:true}
app.use(cors(corsOptions))

app.get("/",(req,res)=>{
    res.send("Welcome to the Lec13")
})
//db connection
const db=require('./models')
db.mongoose.connect(db.url,{
    useNewURLParser:true,
    useUnifiedTopology:true
}).then(()=>{console.log("Connected to the database")})
.catch(err=>{
    console.log(err,"Connection Failed")
    process.exit()
})
const init=require('./models/initial.model')
init();

const PORT=1000;
app.listen(PORT,()=>{
    console.log(`Server Started at Port ${PORT}`)
})