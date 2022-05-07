// select DOM element
let hamburger = document.querySelector(".hamburger");
let mobileNavbar = document.querySelector(".mobileNavbar");
let navbarShadow = document.querySelector(".navbar");
// when click hamburger navbar is show
hamburger.addEventListener("click", () => {
  mobileNavbar.classList.toggle("active");
  navbarShadow.classList.toggle("shadow");
});
