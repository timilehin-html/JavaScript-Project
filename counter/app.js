let dispayScreen = document.querySelector(".display h1");
let buttons = document.querySelectorAll(".buttons button");
let num = 0;
buttons.forEach((a) => {
  a.addEventListener("click", () => {
    let b = a.className;
    if (b === "decrement") {
      num--;
      dispayScreen.innerHTML = num;
      if (num < 0) {
        dispayScreen.style.color = "red";
      }
    } else if (b === "increment") {
      num++;
      dispayScreen.innerHTML = num;
      if (num > 0) {
        dispayScreen.style.color = "green";
      }
    } else {
      num = 0;
      dispayScreen.innerHTML = num;
      dispayScreen.style.color = "black";
    }
  });
});
