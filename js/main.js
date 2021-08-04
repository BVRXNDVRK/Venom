// alert ('ddfwsd');

const menu = document.querySelector('.nav-menu');
const menuBtn = document.querySelector('.menu-button');
const closeMenuBtn = document.querySelector('.menu-button-close');

menuBtn.addEventListener("click", () => {
  menu.classList.toggle('is-open');
  closeMenuBtn.classList.toggle('is-open');
});

closeMenuBtn.addEventListener("click", () => {
  menu.classList.toggle("is-open");
  closeMenuBtn.classList.toggle('is-open');
});