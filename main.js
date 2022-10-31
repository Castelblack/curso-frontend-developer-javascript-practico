const menuEmail = document.getElementById('emailMenu');
const desktopMenu = document.getElementById('menuDesplegable');

menuEmail.addEventListener('click',showDesplegar);

function showDesplegar(){
    desktopMenu.classList.toggle('inactive');
}