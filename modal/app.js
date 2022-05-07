// select DOM element
let openModal = document.querySelector(".openModal");
let modal = document.querySelector(".container1");
let closeModal = document.querySelector(".crossArrow");

openModal.addEventListener("click", () => {
  modal.style.transform = "scale(1)";
});
closeModal.addEventListener("click", () => {
  modal.style.transform = "scale(0)";
});