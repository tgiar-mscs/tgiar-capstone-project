'use strict';
const searchBar = document.querySelector('.search');

document.addEventListener('keydown', function (e) {
  const convertToLowerCase = searchBar.value.toLowerCase();
  console.log(e.key);
  if (e.key === 'Enter') {
    if (convertToLowerCase === 'fire') {
      console.log('Fire was searched');
      window.location.href = 'fire.html';
    } else if (convertToLowerCase === 'gas leak') {
      console.log('Gas Leak was searched');
      window.location.href = 'gas_leak.html';
    } else if (convertToLowerCase === 'robbery') {
      console.log('Robbery was searched');
      window.location.href = 'robbery.html';
    } else if (convertToLowerCase === 'flood') {
      console.log('Flood was searched');
      window.location.href = 'flood.html';
    } else if (convertToLowerCase === 'poison') {
      console.log('Poison was searched');
      window.location.href = 'poison.html';
    } else if (convertToLowerCase === 'chemical spill') {
      console.log('Chemical Spill was searched');
      window.location.href = 'chemical_spill.html';
    } else if (convertToLowerCase === 'weather') {
      console.log('Weather was searched');
      window.location.href = 'weather.html';
    } else if (convertToLowerCase === 'explosion') {
      console.log('Explosion was searched');
      window.location.href = 'explosion.html';
    } else {
      console.log(`User searched for ${convertToLowerCase}`);
      alert('Search Invalid - Please try again!');
    }
  }
});

// Modal content
const content = document.getElementById('insert-steps');
content.innerHTML = `<ul>
<li>Step 1: Simply type in your said emergency and hit enter.</li>
<li>Step 2: Read the step-by-step guide to advice you on what to do.</li>
<li>Step 3: Stay calm and breath!</li>
</ul>`;

// Get the modal
const modal = document.getElementById('myModal');

// Get the button that opens the modal
const btn = document.getElementById('modalBtn');

// Get the <span> element that closes the modal
const span = document.getElementsByClassName('close')[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = 'block';
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};
