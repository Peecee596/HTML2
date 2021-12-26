
exports.add=(req,res)=>{
    const db=require('../models')
    const News=db.News;

    if(!req.body.title)
    {
        res.status(404).send({message:"Title cannot be empty"})
    }

    const news=new News({
        title=req.body.title,
        news:req.body.news,
        published:req.body.published,
        author:req.body.author
    })
    news.save(news).then(data=>{res.send(data)})
    .catch(err=>{
        res.status(500).send({message: err.message||`Some Error Occued!`})
    })
    
}