const outputName = document.querySelector('#name-output');
const inputName = document.querySelector('#name-input');

inputName.addEventListener("input", (event) => {
    outputName.textContent = event.currentTarget.value;
    if (event.target.value === '') {
        outputName.textContent = 'Anonymous';
    }
})