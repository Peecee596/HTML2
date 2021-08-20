//function to calculate the Interest
function interest(principal)
{
    return 0.20 * principal;
}
var principal=5000;
var interest=interest(principal);
console.log("Interest Calculated is:"+interest);
var finalamount= principal+interest;
console.log("Final Amount is:"+finalamount);

//function to calculate the percentage

function sum (eng,math,sci)
{
    return eng+math+sci;
}
var total=sum(80,70,80);
// console.log(total);
function percentage(per)
{
    var percent=(per/300)*100;
    console.log("Percentage is:"+percent);
}
percentage(total);
