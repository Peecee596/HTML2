const express=require("express")
const app=express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
const cors=require('cors')
var CorsOptions={
    orgin:true
}
app.use(cors(CorsOptions))

app.get("/",(req,res)=>{
    res.send("Welcome to the lec 9-Routing")
})
//connect database

const db=require('./models')
db.mongoose.connect(db.url,{

    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{console.log("Connected to Database")})
.catch(err=>{
    console.log("Connection Failed")
    process.exit()
})

require('./routes/routes')(app)
const PORT=3000;
app.listen(PORT,()=>{
    console.log(`Server started at PORT-${PORT}`)
})