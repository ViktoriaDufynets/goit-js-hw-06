function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorBtn = document.querySelector('.change-color');
const body = document.body;
const bodyColor = document.querySelector('.color');

changeColorBtn.addEventListener('click', changeColorClick);

function changeColorClick() {
  body.style.backgroundColor = getRandomHexColor();
  bodyColor.textContent = body.style.backgroundColor;
};

