
////////////////////////////////////////////////////////////////////////////////////////////


// Selecting the root element and button from the DOM
const root = document.querySelector('#root');
const button = document.querySelector('#button');

// Function to create a new card item based on the provided item data
function createItem(item) {
  // Create the card element
  const card = document.createElement('div');
  card.classList.add('card');

  // Create the image element and set its source to the item's thumbnail URL
  const photo = document.createElement('img');
  photo.src = item.thumbnailUrl;

  // Create the title element and set its text to the item's title
  const title = document.createElement('h4');
  title.innerHTML = item.title;

  // Append the photo and title elements to the card element
  card.appendChild(photo);
  card.appendChild(title);

  // Append the card element to the root element
  root.appendChild(card);
}

// Function to fetch image data and display it on the page
async function FetchAndDisplayImages(item) {
  // Fetch image data from the specified URL
  const fetchImg = await fetch('https://jsonplaceholder.typicode.com/albums/1/photos');
  
  // Convert the fetched data to JSON format
  const data = await fetchImg.json();

  // Loop through each item in the data array and create a new card for it
  data.forEach(function (item) {
    createItem(item);
  });
}

// Add a click event listener to the button that triggers the FetchAndDisplayImages function
button.addEventListener('click', FetchAndDisplayImages);

