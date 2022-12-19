const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


//get access to the  <ul id="ingredients"></ul>
const list = document.querySelector('#ingredients');

// loop through the array of ingredients and for each element of the array create <li class="item">
const arrayIngridients = [];

ingredients.forEach(ingridient => {
  const element = document.createElement('li');
  element.classList.add('item');
  element.textContent = ingridient;
  arrayIngridients.push(element);
})

// add array <li class="item"> to list
list.append(...arrayIngridients);