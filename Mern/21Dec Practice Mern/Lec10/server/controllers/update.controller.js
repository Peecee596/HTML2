exports.update=(req,res)=>{
    const db=require('../models')
    const News=db.News
    const id=req.params.id

    if(!req.body)
    {
        res.status(500).send({message:err.message||"Data not found"})
    }
    News.findByIdAndUpdate(id,req.body,{useFindAndModify:false}).then(data=>{
        if(!data)
        {
            res.status(404).send({message:"Data Not found"})
        }
        else{
            res.send({message:"Updated Successfully"})
        }
    }).catch(err=>{res.status(500).send({message:err.message||"Some Error Occured"})})
}