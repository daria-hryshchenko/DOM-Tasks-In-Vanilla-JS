//const console = require("console");

const images = [{
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

//get access to the  <ul class="gallery"></ul>
const galleryList = document.querySelector(".gallery");

// loop through the array of images and for each element of the array create <li><img /></li>
const imgGallery = [];

images.forEach(img => {
  img = `<li><img class="img" src=${img.url} width = '400' height = '400' alt='${img.alt}'></img></li>`
  imgGallery.push(img);
})
console.log(imgGallery);

//add array to list
galleryList.insertAdjacentHTML('beforeend', [...imgGallery]);


// simple style gallery
galleryList.style.listStyle = 'none';
galleryList.style.display = 'flex';
galleryList.style.gap = '30px';
galleryList.style.justifyContent = 'center';