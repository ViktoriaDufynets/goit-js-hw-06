const input = document.querySelector('#name-input');
let output = document.querySelector('#name-output');

//input.addEventListener('focus', onInputFocus);
//input.addEventListener('change', onInputChange);
input.addEventListener('input', onInputChange);

//function onInputFocus() {
//    console.log('Отримав фокус');
//};

function onInputChange(event) {
    if (event.currentTarget.value.length >= 1) {
    return output.textContent = event.currentTarget.value;
      }
    return output.textContent =  'Anonymous';
};

