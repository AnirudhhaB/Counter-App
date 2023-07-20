const spanNum = document.getElementsByTagName('span')[0];
const increment = document.getElementById('increment');
const decrement = document.getElementById('decrement');
const reset = document.getElementById('reset');

let num = 0;

increment.addEventListener('click', () => {
    num++;
    spanNum.innerText = num;
} )
decrement.addEventListener('click', () => {
    num--;
    spanNum.innerText = num;
} )
reset.addEventListener('click', () => {
    num = 0;
    spanNum.innerText = num;
} )