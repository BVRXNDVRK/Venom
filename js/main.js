alert ('\t\t\t   Venom - промосайт к фильму \n\nВерстал по видеоурокам (ДОБАВИЛ ОТСЕБЯТИНУ В ВИДЕ АНИМАЦИИ ПРИ ЗАГРУЗКЕ ГЛАВНОЙ СТРАНИЦЫ)\n\n \t\t\t\t  Технологии в проэкте: \n- Html\n- Css\n- JavaScript\n- Normalize.css\n- FansyBox');

// МЕНЮ
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

// АНИМАЦИЯ ПРИ ЗАГРУЗКЕ СТРАНИЦЫ
const venom = document.querySelector('.venom');
const filmDate = document.querySelector('.film-date');
const filmLogo = document.querySelector('.film-logo');
const logoImg = document.querySelector('.logo-img');
const filmDescription = document.querySelector('.film-description');
const buttonGroup = document.querySelector('.button-group');


window.addEventListener("load", () => {
  venom.classList.toggle("load");
  filmDate.classList.toggle("load");
  filmLogo.classList.toggle("load");
  logoImg.classList.toggle("load");
  menuBtn.classList.toggle("load");
  filmDescription.classList.toggle("load");
  buttonGroup.classList.toggle("load");
});