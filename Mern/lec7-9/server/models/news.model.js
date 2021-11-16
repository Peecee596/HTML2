module.exports=mongoose=>{

    var schema=mongoose.Schema(
        {
            title:String,
            news:String,
            published:String,
            author:String
        },
        {
            timestamp:true
        }
        
    );

    schema.method("toJSON",function(){
        const{__v,_id,...object}=thistoObject()
        object.id=id
        return object
    })
}