const counterDisplayElem = document.querySelector('.counter-display');
const counterMinusElem = document.querySelector('.counter-minus');
const counterPlusElem = document.querySelector('.counter-plus');

let count = 0;

function updateDisplay() {
    counterDisplayElem.innerHTML = count;
}

counterPlusElem.addEventListener('click', () => {
    count += 1;
    updateDisplay();
});

counterMinusElem.addEventListener('click', () => {
    count -= 1;
    updateDisplay();
});

updateDisplay();
