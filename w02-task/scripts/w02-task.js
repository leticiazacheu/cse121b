/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

let fullName = 'Leticia Fernandes';
const currentYear = currentDate.getFullYear();
const profilePicture = 'images/mypicturecse121b.jpg';


/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.qyerySelector('#year');
const imageElement = document.querySelector('.mypicturecse121b.jpg');


/* Step 4 - Adding Content */

nameElement.innerHTML = fullName;
nameElement.innerHTML = '<strong>$(fullName)</strong>';
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
const altText = `Profile image of ${fullName}`;
imageElement.setAttribute('alt', altText);


/* Step 5 - Array */

const favoriteFoods = ["Pizza", "French Fries", "Donuts", "Churros", "Burgers"];
foodElement.textContent = favoriteFoods.join(', ');
const singleFavoriteFood = "Rice and Beans";
favoriteFoods.push(singleFavoriteFood);
foodElement.innerHTML += '<br>${favoriteFoods}';
favoriteFoods.shift();
foodElement.innerHTML += "<br>" + favoriteFoods.join('<br>');
favoriteFoods.pop();





