  document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
      const navMenu = document.getElementById('nav-menu');
      const hamburger = document.getElementById('hamburger');
    let lastScrollY = window.scrollY;
    const threshold = 10;

    window.addEventListener('scroll', () => {
      const currentScrollY = window.scrollY;

      if (Math.abs(currentScrollY - lastScrollY) < threshold) return;

      if (currentScrollY > lastScrollY) {
        // Scrolling down
        navbar.classList.add('hide-on-scroll');
      } else {
        // Scrolling up
        navbar.classList.remove('hide-on-scroll');
      }

      lastScrollY = currentScrollY;
    });
      // Toggle mobile menu
      hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
      });
  });