/**DOM property & Methods------------ */
/* 01 ---------------------------------
const h1 = document.querySelector('h1');
h1.parentElement.style.backgroundColor = 'yellow';
h1.parentElement.style.padding = '50px';//parent element k aivabe dorte hoy.

for(i =0; i < h1.children.length; i++){
    console.log(h1.children[i]);
}//children element k for loop use kore dorte hoy. children er khetre forEach & map loop kaj korbe na.

h1.firstElementChild.style.color = 'red';
h1.lastElementChild.style.color = 'yellow';
h1.firstElementChild.nextElementSibling.style.color = 'green';
h1.firstElementChild.nextElementSibling.nextElementSibling.style.color = 'blue';
h1.lastElementChild.previousElementSibling.previousElementSibling.style.color = 'gray';
h1.lastElementChild.previousElementSibling.style.color = 'pink';
---------------------------------*/
/* 02 ----------------------------------
valu and placeholder propertyr jonno..
const input = document.querySelector('input');
input.placeholder = 'Email';
console.log(input);
----------------------------------*/

/** 03 .DOM create and delete Element & custom dom element --------------------------------*/
/*
const fox = document.createElement('div');
fox.classList.add('fox');

const lox = document.createElement('div');
lox.classList.add('lox');

const h1 = document.createElement('h1');
h1.classList.add('heading');
h1.id = ('book');
h1.innerHTML = 'We love javascripttttt';
document.querySelector('.box').append(h1);

const p = document.createElement('p');
p.classList.add('parag');
p.id = ('pen');
p.innerText = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt, deleniti?'

lox.append(h1);
lox.append(p);
fox.append(lox);

document.querySelector('.box').append(fox);
-------------------------------------*/
/*atao 03 no----------------------------------
const login_form = document.createElement('form');

const nameField = document.createElement('input');
nameField.classList.add('form-control');
nameField.classList.add('my-3');//margin y okkho borabor sore jabe.
nameField.placeholder = 'Your name'; 
nameField.type = 'text';
nameField.style.backgroundColor = 'green';

const emailField = document.createElement('input');
emailField.classList.add('form-control');
emailField.placeholder = 'Your email';
emailField.classList.add('my-3'); 
emailField.type = 'email';
emailField.style.backgroundColor = 'red'; 

const password = document.createElement('input');
password.classList.add('form-control');
password.classList.add('my-3');
password.placeholder = 'Your password'; 
password.type = 'password'; 
password.style.backgroundColor = 'gray';

login_form.appendChild(nameField);
login_form.appendChild(emailField);
login_form.appendChild(password);
login_form.removeChild(password);

document.querySelector('.box').append(login_form);

console.log(login_form);
-------------------------------------*/

/* 04 --------------------------------
const btn = document.querySelector('.btn');
//btn.addEventListener('click', ()=> alert());

const h1 = document.querySelector('h1');
//h1.addEventListener('click',()=> alert());
//h1.onclick = () =>{alert()};

//Tahole amra pelam event k 2 vabe call kora jay, addEventListener and onclick er maddhome.
btn.onclick = () => {
    h1.innerHTML = 'We love Javascript';
    h1.style.color ='red';
}; 
--------------------------------------*/

const p = document.querySelector('p');
// p.onclick = ()=> {
//     p.innerHTML = 'Never give up :-)';
// };

// p.ondblclick = ()=> {
//     p.innerHTML = 'we love js...';
// };

// p.onmouseleave = ()=>{
//     p.innerHTML = 'practics makes a man perfect..';
// };
    
// p.onmouseenter = ()=>{
//   p.innerHTML = 'MERN devs.';
// };

// p.onmousedown = ()=> {
//     p.innerHTML = 'kemon achen?';// mousedown means mouse er left button chap dilei kaj korbe.
// };

// p.onmouseup = ()=> {
//     p.innerHTML = 'valo achi';// mousedown means mouse er left button chap diye chere dilei kaj korbe.
// }

