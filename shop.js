// script.js
function toggleMenu() {
    var overlayMenu = document.getElementById("overlayMenu");
    overlayMenu.style.display = overlayMenu.style.display === "block" ? "none" : "block";
  }
  
  // Detect screen width on page load and toggle hamburger icon based on it
  function checkScreenWidth() {
    var hamburgerIcon = document.querySelector(".hamburger-icon");
    if (window.innerWidth <= 768) {
      hamburgerIcon.style.display = "block";
    } else {
      hamburgerIcon.style.display = "none";
    }
  }
  
  // Listen for window resize events to toggle hamburger icon
  window.addEventListener("resize", checkScreenWidth);
  
  // Initial check on page load
  checkScreenWidth();
  

  // script.js
function toggleMenu() {
  var hamburgerIcon = document.querySelector(".hamburger-icon");
  hamburgerIcon.classList.toggle("active");

  var overlayMenu = document.getElementById("overlayMenu");
  overlayMenu.style.display = overlayMenu.style.display === "block" ? "none" : "block";

  // Disable scrolling on the body when the menu is active
  document.body.classList.toggle("no-scroll");
}
