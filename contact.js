// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function (event) {
      event.preventDefault();
  
      // Perform custom validation here (e.g., check email format)
      const emailInput = document.getElementById('email');
      const emailValue = emailInput.value.trim();
      if (!isValidEmail(emailValue)) {
        alert('Please enter a valid email address.');
        emailInput.focus();
        return false;
      }
  
      // If the validation passes, submit the form
      contactForm.submit();
    });
  
    // Helper function to validate email format
    function isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  });
  


  // Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function () {
  const hamburgerIcon = document.querySelector('.hamburger-icon');
  const overlayMenu = document.getElementById('overlayMenu');

  hamburgerIcon.addEventListener('click', function () {
    const flexbox2 = document.querySelector('.flexbox-item2');
    flexbox2.style.display = flexbox2.style.display === 'none' ? 'flex' : 'none';
  
    // Toggle the visibility of the overlay menu
    overlayMenu.style.display = overlayMenu.style.display === 'none' ? 'block' : 'none';
  });
});
