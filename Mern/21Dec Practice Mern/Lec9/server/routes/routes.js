module.exports=app=>{

    const Add =require('../controllers/add.controller')
    const FindAll=require('../controllers/findAll.controller')
    const FindOne=require('../controllers/findOne.controller')
    const Delete =require('../controllers/delete.controller')
    const Update=require('../controllers/update.controller')
    
    var router=require('express').Router()

    //add
    router.post("/",Add.add)

    router.get("/",FindAll.findAll)

    router.get("/:id",FindOne.findOne)

    router.put("/:id",Update.update)

    router.delete("/:id",Delete.delete)

    app.use('./api/news',router)
}