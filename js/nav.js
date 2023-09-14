const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".main-navbar");

navToggle.addEventListener("click", () => {
      
    navToggle.classList.add("menu-open");
    navMenu.classList.add("menu-open");
})