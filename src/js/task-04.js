const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]'); 
const targetValue = document.querySelector('#value');
let valueCounter = 0;


incrementButton.addEventListener('click', handleBauttonClickPlus);

function handleBauttonClickPlus() {
    valueCounter += 1;
    targetValue.innerHTML = valueCounter;

};

decrementButton.addEventListener('click', handleBauttonClickMinus);

function handleBauttonClickMinus() {
    valueCounter -= 1;
    targetValue.innerHTML = valueCounter;
};




