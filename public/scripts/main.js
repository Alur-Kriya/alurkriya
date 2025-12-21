// script.js
window.addEventListener('scroll', function () {
  const navbar = document.getElementById('navbar');
  // Check if the user has scrolled more than 50 pixels or is on mobile
  if (window.scrollY > 50 || window.innerWidth < 768) {
    // Add classes for a solid background, shadow, and adjusted text color
    navbar.classList.add('bg-white', 'shadow-md', 'dark:bg-(--color-deep-space-blue-950)');
    navbar.classList.remove('bg-transparent');
  } else {
    // Revert to the initial transparent state and white text
    navbar.classList.remove('bg-white', 'shadow-md', 'dark:bg-(--color-deep-space-blue-950)');
    navbar.classList.add('bg-transparent');
  }
});
