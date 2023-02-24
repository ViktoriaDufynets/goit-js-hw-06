function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const controls = document.querySelector('#controls');
const boxes = document.querySelector('#boxes');


createButton.addEventListener('click', getAmount);

function getAmount() {
  const amount = document.querySelector("#controls input").value;
  createBoxes(amount);
};


function createBoxes(amount) {
  const boxSize = 30;
  for (let i = 0; i < amount; i += 1) {
    const size = boxSize + i * 10;
    const divAmount = document.createElement("div");
    divAmount.style.width = size + 'px';
    divAmount.style.height = size+ 'px';
    divAmount.style.backgroundColor = getRandomHexColor();
    boxes.appendChild(divAmount);
  };
};

destroyButton.addEventListener('click', destroyBoxes);

function destroyBoxes() {
  boxes.innerHTML = "";
}




