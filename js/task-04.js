const currentValue = document.querySelector('#value');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
let counterResult = 0;
const decrement = () => {
    counterResult -= 1;
    return (currentValue.textContent = counterResult);
};
const increment = () => {
    counterResult += 1;
    return (currentValue.textContent = counterResult);
};

decrementBtn.addEventListener('click', decrement);
incrementBtn.addEventListener('click', increment);