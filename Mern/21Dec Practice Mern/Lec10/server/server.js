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
z
const PORT=3000;
app.listen(PORT,()=>{console.log(`Server started at Port ${PORT}`)})