var promise=new Promise(function(resolve,reject)
{
    var x=40;
    var y=30;
    if(x===y)
    {
        resolve();
    }
    else{
        reject();
    }
});
promise.then(function()
{
    console.log("Promised, we will not fail")
}).catch(function()
{
    console.log('Sorry, promised was not kept')
});
