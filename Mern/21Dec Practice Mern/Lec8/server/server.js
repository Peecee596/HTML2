const express=require('express');
const app=express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: true
}))

const cors=require("cors")
var CorsOptions={
    origin:true
}

app.use(cors(CorsOptions))

app.get("/",(req,res)=>{
    res.send("Welcome to Lec 8-FIND,EDIT,UPDATE,DELETE")
})

//connect to database
const db=require('./models')
db.mongoose.connect(db.url,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{
    console.log("Connected to the database")
})
.catch(err=>{
    console.log("Connection Failed")
    process.exit()    
})
const PORT=2000;
app.listen(PORT,()=>{
    console.log(`Server connected to PORT at ${PORT}`)
})