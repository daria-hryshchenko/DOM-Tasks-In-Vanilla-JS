const outputName = document.querySelector('.name-output');
const inputName = document.querySelector('.name-input');

inputName.addEventListener("input", (event) => {
    if (event.target.value = '') {
        outputName.textContent = 'Anonymous';
    }
    outputName.textContent = event.currentTarget.value;
})