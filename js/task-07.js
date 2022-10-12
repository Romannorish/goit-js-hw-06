const sizeEl = document.querySelector("#font-size-control");
console.log(sizeEl);
const spanEl = document.querySelector("#text");
console.log(spanEl);

sizeEl.addEventListener('input', onInput);

spanEl.style.fontSize = sizeEl.value + 'px';

function onInput() {
    spanEl.style.fontSize = sizeEl.value + 'px';
}