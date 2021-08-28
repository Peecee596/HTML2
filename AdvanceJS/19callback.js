function sum(a,b,callback)
{
    console.log(a+b);
    callback();
}
function display()
{
    console.log("Displayed a callback function");
}
sum(50,40,display);
