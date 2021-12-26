exports.findAll=(req,res)=>{
const db=require('../models')
const News=db.News

News.findAll().then(data=>{
    if(!data)
    {
        res.status(400).send({message:`Data cant be found`})
    }
    else{res.send(data)}
})
.catch(err=>{res.status(500).send({message:err.message||`Some error occured`})})
}