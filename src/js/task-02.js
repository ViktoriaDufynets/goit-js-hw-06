const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



for (const ingredient of ingredients) {

const allItems = document.createElement("li");
allItems.textContent = ingredient;
allItems.classList.add('item');
  console.log(allItems); 
  const list = document.querySelector("#ingredients");
  list.append(allItems);
  
};


  











