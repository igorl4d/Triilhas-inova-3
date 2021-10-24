const menuHamburguer = document.querySelector('.menu-hamburguer');
const menu = document.querySelector('.menu');
const body = document.querySelector('body');
const menuBarra = document.querySelector('.menu_barra')

menuHamburguer.addEventListener('click', () => {
  menu.classList.toggle('show');
  body.classList.toggle('show');
});

itemNav = document.querySelectorAll('.menu_item')

for (var i = 0; i < itemNav.length; i++) {
  itemNav[i].addEventListener('click', () => {
    menu.classList.toggle('show');
    body.classList.toggle('show');
  })
}