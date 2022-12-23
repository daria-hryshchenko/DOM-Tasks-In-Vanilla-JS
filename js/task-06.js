const inputTextEl = document.querySelector('#validation-input');

inputTextEl.addEventListener('blur', (event) => {
    if (event.currentTarget.value.length >= inputTextEl.getAttribute('data-length')) {
        inputTextEl.classList.add('valid');
        inputTextEl.classList.remove('invalid');
        return;
    } else {
        inputTextEl.classList.add('invalid');
        inputTextEl.classList.remove('valid');
    }

});