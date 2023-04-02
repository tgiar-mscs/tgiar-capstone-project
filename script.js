'use strict';
let searchBar = document.querySelector('.search');

document.addEventListener('keydown', function (e) {
  console.log(e.key);
  if (e.key === 'Enter') {
    if (searchBar.value === 'Fire') {
      console.log('Fire was searched');
      window.location.href = 'fire.html';
    } else if (searchBar.value === 'Gas Leak') {
      console.log('Gas Leak was searched');
      window.location.href = 'gas_leak.html';
    } else if (searchBar.value === 'Robbery') {
      console.log('Robbery was searched');
      window.location.href = 'robbery.html';
    } else if (searchBar.value === 'Flood') {
      console.log('Flood was searched');
      window.location.href = 'flood.html';
    } else if (searchBar.value === 'Poison') {
      console.log('Poison was searched');
      window.location.href = 'poison.html';
    } else if (searchBar.value === 'Chemical Spill') {
      console.log('Chemical Spill was searched');
      window.location.href = 'chemical_spill.html';
    } else if (searchBar.value === 'Weather') {
      console.log('Weather was searched');
      window.location.href = 'weather.html';
    } else if (searchBar.value === 'Explosion') {
      console.log('Explosion was searched');
      window.location.href = 'explosion.html';
    } else {
      console.log(`User searched for ${searchBar.value}`);
      alert('Search Invalid - Please try again!');
    }
  }
});
