// JavaScript code goes here

// Function to toggle the visibility of the second flexbox and the overlay menu
function toggleMenu() {
  var flexbox2 = document.querySelector('.flexbox-item2');
  flexbox2.style.display = flexbox2.style.display === 'none' ? 'flex' : 'none';

  // Toggle the visibility of the overlay menu
  var overlayMenu = document.getElementById('overlayMenu');
  overlayMenu.style.display = overlayMenu.style.display === 'none' ? 'block' : 'none';
}

// You can add more JavaScript functions or code here as needed
// For example, handling other interactions or adding additional functionalities.

// script.js
function toggleMenu() {
  var hamburgerIcon = document.querySelector(".hamburger-icon");
  hamburgerIcon.classList.toggle("active");

  var overlayMenu = document.getElementById("overlayMenu");
  overlayMenu.style.display = overlayMenu.style.display === "block" ? "none" : "block";

  // Disable scrolling on the body when the menu is active
  document.body.classList.toggle("no-scroll");
}
