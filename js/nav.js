const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.main-navbar');

navToggle.addEventListener('click', () => {
      
     openAndClose();
})

const openAndClose = () => {

    if (navMenu.classList.contains('menu-open')) {
        navToggle.classList.add('menu-close');
        navMenu.classList.remove('menu-open');
        navToggle.classList.remove('menu-open');
      } else {
        navToggle.classList.remove('menu-close');
        navMenu.classList.add('menu-open');
        navToggle.classList.add('menu-open');
      }
}