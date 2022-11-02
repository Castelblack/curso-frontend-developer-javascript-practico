const menuEmail = document.getElementById('emailMenu');
const desktopMenu = document.getElementById('menuDesplegable');
const MenuMovil = document.getElementById('mobileMenu');
const menuHamburguesa = document.getElementById('menuHamburguesa');


menuEmail.addEventListener('click',showDesplegar);
menuHamburguesa.addEventListener('click',toggleMobileMenu);

function showDesplegar(){
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    MenuMovil.classList.toggle('inactive');
}