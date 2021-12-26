const express=require("express")
const app=express()

const bodyParser=require('body-parser')
app.use(bodyParser.urlencoded({
    extended:true
}))

const cors=require('cors')
var CorsOptions={
    origin:true
}
app.use(cors(CorsOptions))

app.get("/",(req,res)=>{
    res.send("Welcome to lec7-model and index.js")
})

//database connection
const db=require('./models')
db.mongoose.connect(db.url,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{
    console.log("Connected to a database")
})
.catch(err=>{
    console.log("Cannot connect to a database")
    process.exit()
})
const PORT=7000;
app.listen(PORT,()=>{
    console.log(`Server started at Port ${PORT}`)
})