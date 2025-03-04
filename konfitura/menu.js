const menurun = document.querySelector('.menu-sect');
menurun.addEventListener('click', Menu);
const menu = document.getElementById('side-menu');
let menuOn = false;
function Menu(){
    if(menuOn){
        menu.style.height = '0vh';
        menuOn = false;
    } else {
        menu.style.height = '30vh';
        menuOn = true;
    }
}