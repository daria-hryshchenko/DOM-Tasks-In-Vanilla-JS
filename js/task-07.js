const inputRangeEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

textEl.style.fontSize = inputRangeEl.value;

inputRangeEl.addEventListener('input', (event) => {
    textEl.style.fontSize = event.currentTarget.value + 'px';
})