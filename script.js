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
