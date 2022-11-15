let img = document.querySelector('img');
let btn1 = document.querySelector('#white');
let btn2 = document.querySelector('#black');
let btn3 = document.querySelector('#red');
let btn4 = document.querySelector('#pink');
let btn5 = document.querySelector('#blue');

btn1.addEventListener('click', () => {
    img.src = 'shirts/white.png';
})

btn2.addEventListener('click', () => {
    img.src = 'shirts/black.png';
})

btn3.addEventListener('click', () => {
    img.src = 'shirts/red.png';
})

btn4.addEventListener('click', () => {
    img.src = 'shirts/pink.png';
})

btn5.addEventListener('click', () => {
    img.src = 'shirts/blue.png';
})