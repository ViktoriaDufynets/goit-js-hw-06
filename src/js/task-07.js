const drag = document.querySelector('#font-size-control');
const text = document.querySelector('#text');


drag.addEventListener('input', onMousedrag);

function onMousedrag(event) {
  text.style.fontSize = event.currentTarget.value + 'px';
};