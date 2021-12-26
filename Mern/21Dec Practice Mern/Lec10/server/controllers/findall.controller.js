exports.findAll=(req,res)=>{
    const db=require('../models')
    const News=db.News

    News.find().then(data=>{
        if(!data)
        {
            res.status(404).send({message:"data not avialable"})
        }
        else{res.send(data)}
    })
    .catch(err=>{res.status(500).send({message:err.message||`Some Error Occured`})})
}