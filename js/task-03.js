const images = [
  {
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

const list = document.querySelector(".gallery");
list.style.display = 'flex';
list.style.flexDirection = 'column';
list.style.gap = '30px';
list.style.alignItems = 'center';
list.style.listStyle = 'none';
list.insertAdjacentHTML("beforebegin", "<h2>Popular content</h2>");
const headerTitle = document.querySelector("h2");
headerTitle.style.color = 'teal';
headerTitle.style.textAlign = 'center';


const finalGallery = images => {

const allImagesArray = images.reduce(
  (acc, image) => acc + `
     <li>
       <img src="${image.url}" alt="${image.alt}" width="840">
     </li>
   `,
  "");
  list.insertAdjacentHTML('beforeend', allImagesArray);
};
  
 finalGallery(images);
  


// const allImagesArray = images.reduce(
//   (acc, image) => acc + `
//      <li>
//        <img src="${image.url}" alt="${image.alt}" width="840">
//      </li>
//    `,
//   "");

// list.innerHTML = allImagesArray;







