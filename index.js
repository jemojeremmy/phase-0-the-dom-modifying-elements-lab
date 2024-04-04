// Remove the <main> element with the id 'main'
const mainElement = document.getElementById('main');
if (mainElement) {
    mainElement.remove();
}

// Create a new <h1> element
const newHeader = document.createElement('h1');
newHeader.textContent = 'YOUR-NAME is the champion'; // Replace 'YOUR-NAME' with your name
newHeader.id = 'victory';

// Append the new <h1> element to the document body
document.body.appendChild(newHeader);

