exports.update=(req,res)=>{
    const db=require('../models')
    const News=db.News
    const id=req.params.id

    if(!req.body)
    {
        res.status(500).send({message:`Data to be updated cannot be empty`})
    }
    News.findByIdAndUpdate(id,req.body,{useFindAndModify:false}).then(data=>{
        if(!data)
        {
            res.status(404).send({message:`Data cant be found`})
        }
        else{res.send({message:`Message Updated Successfully`})}
    }).catch(err=>res.status(500).send({message:err.message ||`Some Error Occurred`}))

}