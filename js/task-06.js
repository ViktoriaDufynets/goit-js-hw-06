const input = document.querySelector('#validation-input');

input.addEventListener('focus', onInputFocus);
input.addEventListener('blur', onInputBlur);

function onInputFocus() {
    console.log('Отримав фокус');
};

const inputLength = input.getAttribute('data-length');


function onInputBlur(event) {
  console.log('Зняв фокус');
    if (event.currentTarget.value.length === Number(inputLength)) {
    return input.style.borderColor = 'green';
      }
    return input.style.borderColor = 'red';
};