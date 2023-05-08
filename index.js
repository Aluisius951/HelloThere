// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.style.color = 'blue';
appDiv.onclick = function () {
  appDiv.innerHTML = `<h1>General Kenobi</h1>`;
  appDiv.style.color = 'red';
};
