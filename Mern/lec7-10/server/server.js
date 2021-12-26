const express=require('express');
var bodyParser = require('body-parser');
const cors=require('cors')
const app= express();

app.use(bodyParser.urlencoded({
    extended: true  }));  

app.use(bodyParser.json())
var corsoptions={
    origin:true
}
app.use(cors(corsoptions))
    

app.get('/',(req,res)=>{
    res.send("Welcome to the new Planet")
})

const db=require('./models')
db.mongoose.connect(db.url,{
    useNewUrlParser:true,
    useUnifiedTopology:true

})
.then(()=>{
    console.log('connected to Database')
})
.catch(err=>{
    console.log("cannot connect to Database",err)
    process.exit()
})
//router
require('./routes/news.routes')(app)




const PORT=5000;
app.listen(PORT,()=>{
    console.log(`Server started at ${PORT}`)
})