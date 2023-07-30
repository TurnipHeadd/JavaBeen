document.addEventListener('DOMContentLoaded', function () {
  const hamburgerIcon = document.querySelector('.hamburger-icon');
  const overlayMenu = document.getElementById('overlayMenu');
  const contactForm = document.getElementById('contactForm');
  const flexbox2 = document.querySelector('.flexbox-item2');

  // Store the original display property of flexbox2
  const originalFlexbox2Display = window.getComputedStyle(flexbox2).display;

  hamburgerIcon.addEventListener('click', function () {
    // Toggle the "active" class to show/hide the menu and overlay
    hamburgerIcon.classList.toggle('active');
    overlayMenu.classList.toggle('active');

    // Disable scrolling on the body when the menu is active
    document.body.classList.toggle('no-scroll');
  });

  // Close the menu when clicking on the overlay
  overlayMenu.addEventListener('click', function () {
    hamburgerIcon.classList.remove('active');
    overlayMenu.classList.remove('active');
    document.body.classList.remove('no-scroll');
  });

  contactForm.addEventListener('submit', function (event) {
    // ... rest of the contact form submission code ...
  });

  // Helper function to validate email format
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
});
