const hamburger = document.querySelector('.fa-bars');
const navbar = document.querySelector('.navbar');
const close = document.querySelector('.fa-xmark');

hamburger.addEventListener('click', () => {
  navbar.style.display = 'flex';
  close.style.display = 'flex';
});

close.addEventListener('click', () => {
  navbar.style.display = 'none';
  close.style.display = 'none';
});
