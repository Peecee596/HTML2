module.exports=app=>{
    const Add=require('../controllers/add.controller')
    const Delete=require('../controllers/delete.controller')
    const Findone=require('../controllers/findOne.controller')
    const Findall=require('../controllers/findAll.controller')
    const Update=require('../controllers/update.controller')

    var router =require('express').Router()

    //add
    router.post('/',Add.add)
    //delete
    router.delete('/:id',Delete.delete)
    
    //find
    router.get('/',Findall.findAll)
    //findone
    router.get('/:id',Findone.findOne)
    //update
    router.put('/:id',Update.update)
    

    app.use('/api/news',router)
}