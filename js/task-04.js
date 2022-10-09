const refs = {
    btnDecrement: document.querySelector('button[data-action="decrement"]');
    valueEl: document.querySelector('#value');
    btnincrement: document.querySelector('button[data-action="increment"]')
}


refs.btnDecrement.addEventListener('click', onBtnDecrementClick);
refs.btnincrement.addEventListener('click', onBtnincrementClick);


let counterValue = 0;

function onBtnDecrementClick() {
    counterValue += 1;
    refs.valueEl.textContent = counterValue;
};



function onBtnincrementClick() {
    counterValue -= 1;
    refs.valueEl.textContent = counterValue;
};

