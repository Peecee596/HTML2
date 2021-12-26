module.exports=app=>{
    const Add=require('../controllers/add.controller')
    const Delete=require('../controllers/delete.controller')
    const FindAll=require('../controllers/findall.controller')
    const FindOne=require('../controllers/findone.controller')
    const Update=require('../controllers/update.controller')

    var router=require('express').Router()

    //add-post
    router.post('/',Add.add)

    //find-get
    router.get('/',FindAll.findAll)
    router.get('/:id',FindOne.findOne)

    //delete-delete
    router.delete('/:id',Delete.delete)

    //update-put
    router.put("/:id",Update.update)

    //call
    app.use("/api/news",router)

}