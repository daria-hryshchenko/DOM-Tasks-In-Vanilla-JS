function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtn = document.querySelector('.change-color');
const infoColorEl = document.querySelector('.color');

changeColorBtn.addEventListener('click', (event) => {
  let currentColor = getRandomHexColor();
  document.body.style.background = currentColor;
  infoColorEl.textContent = currentColor;
})