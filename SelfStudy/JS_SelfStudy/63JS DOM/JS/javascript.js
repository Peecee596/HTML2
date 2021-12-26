// element=document.getElementById('content');
// console.log(element);

// element=document.getElementById('content').innerText;
// console.log(element);

// element=document.getElementById('content').innerHTML;
// console.log(element);

// element=document.getElementById('content').getAttribute('id');
// console.log(element);

// element=document.getElementById('content').getAttributeNode('id');
// console.log(element);

// element=document.getElementById('content').attributes;
// console.log(element);

// element=document.getElementById('content').attributes[0];
// console.log(element);

// element=document.getElementById('content').attributes[0].value;
// console.log(element);

// element=document.getElementById('content').attributes[0].name;
// console.log(element);

// //set methods

// element=document.getElementById('header').innerHTML='<h1>Poonam Creations</h1>'
// console.log(element);

// // element=document.getElementById('header').setAttribute("style","border: 15px dashed yellow");
// // console.log(element);

// // element=document.getElementById('header').removeAttribute('style');
// // console.log(element);

// //queyselector|queryselectorAll

// element=document.querySelector('#header').innerHTML='<h1>NamamiGange</h1>'
// console.log(element);

// element=document.querySelector('#header').getAttribute('id');
// console.log(element);

// element=document.querySelectorAll('li');
// console.log(element);

// element=document.querySelectorAll('li')[1];
// console.log(element);

// element=document.querySelectorAll('ul');
// console.log(element);

// element=document.querySelectorAll('ul')[1];
// console.log(element);

// element=document.querySelectorAll('ul')[1].innerText;
// console.log(element);

// element=document.querySelectorAll("#header h1");
// console.log(element);

// element = document.querySelectorAll("#header h1")[0].innerText;

// console.log(element);

// element=document.querySelectorAll("#header h1")[0].innerHTML;
// console.log(element);

// //CSS styling Methods

// element=document.querySelector("#header").style.border;
// console.log(element);

// element=document.querySelector('#header').style.color;
// console.log(element);

// element=document.querySelector('#header').style.backgroundColor;
// console.log(element);

// element=document.querySelector('#header').style.backgroundColor='green';
// console.log(element);

// document.querySelector('#header').className='abc xyz';
// element=document.querySelector('#header').className;
// console.log(element);

// document.querySelector('#header').classList='ert iop';
// element=document.querySelector('#header').classList;
// console.log(element);

// document.querySelector('#header').classList.add('uip');
// element=document.querySelector('#header').classList;
// console.log(element);

// document.querySelector('#header').classList.remove('uip');
// element=document.querySelector('#header').classList;
// console.log(element);

// document.getElementById('header').onclick=abc;
// function abc(){
//     document.getElementById('header').style.backgroundColor='white';
// }
// document.getElementById('header').onmouseenter=xyz;
// function xyz()
// {   
// document.getElementById('header').style.backgroundColor='yellow';

// }

// document.getElementById('header').addEventListener('click',abc);
// // document.getElementById('header').addEventListener('click',function(){
// //     document.getElementById('header').style.border='10px solid pink';
// // });

// //document.getElementById("header").removeEventListener('mouseleave',abc);

// //document.getElementById("header").addEventListener("click",xyz);

// function abc(){
//     document.getElementById("header").style.background = "green";
// }

// function xyz() {
//     document.getElementById("header").removeEventListener('mouseleave',abc)

//-------------
// document.getElementById("header").addEventListener('mouseleave',abc);
// function abc(){
//     document.getElementById("header").style.background = "pink";
// }

// document.getElementById("header").addEventListener("click",xyz);
// function xyz() {
//     document.getElementById("header").removeEventListener('mouseleave',abc);
// }



document.getElementById('header').addEventListener('click',abc);
function abc(){
    document.getElementById('header').classList.toggle('xyz');
}


