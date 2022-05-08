// get DOM element
let que = document.querySelectorAll(".que");
// DOM one by one value excess
que.forEach((a) => {
  const button = a.querySelector(".question .button");
  button.addEventListener("click", () => {
    que.forEach((item) => {
      if (item !== a) {
        item.classList.remove("show");
      }
    });
    a.classList.toggle("show");
  });
});
