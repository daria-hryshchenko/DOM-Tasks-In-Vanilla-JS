// counts and displays the number of categories in the console
const itemList = document.querySelectorAll('.item');
console.log(`Number of categories: ${itemList.length}`);

//finds and prints to the console the text of the element's title
itemList.forEach(item => {
    console.log(`Category: ${item.querySelector('h2').textContent} `);
    console.log(`Elements: ${item.querySelector('ul').children.length}`)
});