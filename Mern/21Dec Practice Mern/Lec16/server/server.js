const express=require('express')
const app=express()

const bodyParser=require('body-parser')
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

const cors=require('cors')
var corsOptions={origin:true}
app.use(cors(corsOptions))



//db connection
const db=require('./model')
const { mongoose } = require('./model')
db.mongoose.connect(db.url,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{console.log("Connected to the DB")})
.catch(err=>{console.log(`Failed to connect the error,${err}`)})

const init=require('./model/initial-model')
init()

require('./routes/auth.routes')(app)
app.get("/",(req,res)=>{
    res.send("welcome to express server")
})
const PORT=4000;
app.listen(PORT,()=>{
    console.log(`Server started at PORT ${PORT}`)
})