// Write your code here!
// Remove the <main> element with id 'main'
const mainElement = document.querySelector('main#main');
mainElement.remove();

// Create a new <h1> element with id 'victory' containing the message "YOUR-NAME is the champion"
const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.textContent = 'YOUR-NAME is the champion';
document.body.appendChild(newHeader);
