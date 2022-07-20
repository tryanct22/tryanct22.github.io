const menuElement = document.querySelector('.menu');

const menuOpenButton = document.getElementById('menu-hamburger');
menuOpenButton.addEventListener('click', openMenu);

function openMenu() {
  menuElement.classList.add('menu-open');
}

const menuCloseButton = document.getElementById('menu-close');
menuCloseButton.addEventListener("click", closeMenu);

function closeMenu() {
  menuElement.classList.remove('menu-open');
}