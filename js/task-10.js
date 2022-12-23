function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputNumberEl = document.querySelector('#controls>input');
const createBtnEl = document.querySelector('button[data-create]');
const destroyBtnEl = document.querySelector('button[data-destroy]');
const boxesEl = document.querySelector('#boxes');


const createBoxes = event => {
  const addElements = []
  for (let i = 0; i < event; i++) {
    const firstSize = 30;
    const div = document.createElement('div')
    div.style.height = `${firstSize + i * 10}px`
    div.style.width = `${firstSize + i * 10}px`
    div.style.background = getRandomHexColor()
    addElements.push(div)
  }
  return addElements;
}

const destroyBoxes = () => {
  boxesEl.innerHTML = ''
}

createBtnEl.addEventListener('click', () => {
  let boxesToAdd = createBoxes(inputNumberEl.value)
  boxesEl.append(...boxesToAdd)
})

console.log(inputNumberEl.value)

destroyBtnEl.addEventListener('click', () => {
  destroyBoxes.call()
})