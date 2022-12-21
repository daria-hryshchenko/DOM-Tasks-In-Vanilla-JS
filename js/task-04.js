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

console.log(decrementBtn.addEventListener('click', decrement));
console.log(incrementBtn.addEventListener('click', increment));