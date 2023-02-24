const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");

 const ingredientItems = ingredients.map(ingredient => {
   const allItems = document.createElement('li');
   allItems.textContent = ingredient;
   allItems.classList.add('item');
   return allItems;
 });
 list.append(...ingredientItems);




  











