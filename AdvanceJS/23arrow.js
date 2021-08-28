//function
function hello()
{
    console.log("JS");
}
hello();
//2nd
abc=()=>{
    console.log(2+2);
}
abc();
//3rd
hi=()=>console.log("India");
hi();
//4th
calendar=()=>`today is 28th august`;
console.log(calendar());
//5th
welcome=(name,age)=>`Name is ${name} and age is ${age}`;
console.log(welcome('Poonam',250));