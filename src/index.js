'use strict';

const buttonELement = document.querySelector('.button');
const textElement = document.querySelector('.text');

let timeoutId;
buttonELement.addEventListener('click', function() {
    // console.log(e);
    timeoutId = clearInterval();
    // textElement.textContent = 'Happy New year';
    timeoutId(setInterval(() => {
        textElement.textContent = "Wishing  y'all a Happy New Year!!!";
    }, 1500))
});