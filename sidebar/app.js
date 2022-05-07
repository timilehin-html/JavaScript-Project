// DOM element select
let hamburger = document.querySelector(".hamburger");
let crossArrow = document.querySelector(".crossArrow");
let navbar = document.querySelector(".navbar");
// hamburger icons work
hamburger.addEventListener("click", () => {
  if (navbar.style.transform == "translateX(0px)") {
        navbar.style.transform = "translateX(-500px)";
  } else {
        navbar.style.transform = "translateX(0px)";
  }
});
// cross icon work
crossArrow.addEventListener("click", () => {
  navbar.style.transform = "translateX(-500px)";
});
