// select an element
const title = document.querySelector('h1');

console.log(title);

// change property of element
title.textContent = 'Web Page Components';

// don't always have to put our selected element into a variable
// document.querySelector('#topics').style.color = 'red';

// using getElementById
document.getElementById('topics').style.color = 'purple';

// selecting element using a class name
let list = document.querySelector('.list');

list.style.border = '3px solid black';  //only first because it brings we'd need to loop to get them all

let para = document.querySelector('p');

// two ways to apply a style 1. using .style and 2. using a class that is already set up on CSS called .background
//para.style.backgroundColor = 'lightblue';

para.classList.add('background');

//document.querySelector('body').classList.add('background');

// change an image in js

const image = document.querySelector('img');
image.setAttribute('src', 'images/web.png');

// Using drop-down change and values
let selectElem = document.getElementById('webdevlist');
selectElem.addEventListener('change', function(){
    let codeValue = selectElem.value;
    console.log(codeValue);
    document.getElementById(codeValue).style.color = 'red';
})
                