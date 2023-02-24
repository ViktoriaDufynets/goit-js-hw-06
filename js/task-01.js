///console.dir(document);

const navCategories = document.querySelectorAll('.item');
console.log(`Number of categories: ${navCategories.length}`);


navCategories.forEach(category => {

const categoryTitle = category.querySelector('h2').textContent;
const categoryCount = category.querySelectorAll('li').length;

 console.log(`Category: ${categoryTitle} \n Number of items: ${categoryCount}`);
});






