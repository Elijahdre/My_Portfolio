const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const brandName = document.querySelector('.nav-branding');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  // brandName.style.display = "none";
});

document.querySelectorAll('.nav-link').forEach((n) =>
  n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  })
);
