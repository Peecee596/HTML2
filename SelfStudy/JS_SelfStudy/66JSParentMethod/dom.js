var element=document.getElementById('outer').parentElement;
console.log(element);

var element=document.getElementById('inner').parentElement;
console.log(element);

var element=document.getElementById('inner').parentElement.style.backgroundColor='yellow';
console.log(element);

var element=document.getElementById('inner').parentElement.style.border='3px solid black';
console.log(element);

var element=document.getElementById('inner').parentElement.style.color='white';
console.log(element);

var element=document.getElementById('child-c').parentElement.style.backgroundColor='red';
console.log(element);

var element=document.getElementById('outer').children;
console.log(element);

var element=document.getElementById('inner').children;
console.log(element);

var element=document.getElementById('inner').childNodes;
console.log(element);


var element=document.getElementById('outer').children[0].style.border='20px solid green';
console.log(element);


var element=document.getElementById('outer').firstElementChild.innerHTML;
console.log(element);

var element=document.getElementById('outer').lastElementChild.innerText;
console.log(element);