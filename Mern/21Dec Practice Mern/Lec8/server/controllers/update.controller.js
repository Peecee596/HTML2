exports.update=(req,res)=>{
    const db=require("../models")
    const News=db.News
    const id=req.params.id

    if(!req.body)
    {
        res.status(404).send({message:`Data to Update Cannot be empty`})
    }

    News.findByIdAndUpdate(id,req.body,{UseFindAndModify:false}).then(data=>{
        if(!data)
        {
            res.status(404).send({message:`Cannot update the data with ${id}`})
        }
        else{res.send({message:`Updated Successfully`})}
    }).catch(err=>{res.status(500).send({message:err.message||`Some error occured`})})

}