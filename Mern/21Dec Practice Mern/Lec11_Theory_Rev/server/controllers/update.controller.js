exports.update=(req,res)=>{
    const db=require('../models')
    const News=db.News
    const id=req.params.id
    
    if(!req.body){
        res.status(500).send({message:`Blank data cannot be updated`})
    }

    News.findByIdAndUpdate(id,req.body,{useFindAndModify:false}).then(data=>{
        if(!data){
            res.status(404).send({message:`Data not found with ${id}`})
        }
        else{
            //res.send(data)
           
            res.send({message:`Data Updated Successfully`})
        }

    }).catch(err=>{res.status(500).send({message:err||`Some Error Occured`})})

}