// script.js

// Get the hamburger icon and navbar elements
const hamburger = document.getElementById('hamburger');
const navbar = document.getElementById('navbar');

// Add a click event listener to the hamburger icon
hamburger.addEventListener('click', () => {
  // Toggle the 'show' class on the navbar when the hamburger is clicked
  navbar.classList.toggle('show');
});
