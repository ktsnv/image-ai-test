// index.js

let generateImageForm = 
    document.getElementById('generate-image-form');
let formInput = 
    document.getElementById('input-value');
let imageContainerText = 
    document.getElementById('imageContainerText');
let imageGenerated = 
    document.getElementById('generated-image');
let imageContainer = 
    document.getElementById('images-visible');

function fetchImages(category) {
const axios = require('axios');

const apiUrl = 'https://api.picogen.io/v1/job/generate';
const apiToken = '818080b8c986a5800ad523f3dbb858086c9209346b95ca7a67cdd5024d7eb88a';

const data = {
  prompt: category,
  ratio: "16:9"
};

axios.post(apiUrl, data, {
  headers: {
    'Content-Type': 'application/json',
    'API-Token': apiToken
  }
})
.then(response => {
  console.log(response.data);
})
.catch(error => {
  console.error('Error:', error);
});

}

generateImageForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let enteredText = formInput.value;
    if (enteredText !== "") {
        fetchImages(enteredText);
    }
    else {
        imageContainerText.innerText = 
            "Input field can not be empty!";
    }
})
