// Now we make global ariable
var hour, minut, second, interval;
hour = 0;
minut = 0;
second = 0;

// reset everything
function reset() {
  hour = 0;
  minut = 0;
  second = 0;
  updateValue(0, 0, 0);
  clearInterval(interval);
}

// update value
function updateValue(h, m, s) {
  s = s < 10 ? "0" + s : s;
  m = m < 10 ? "0" + m : m;
  h = h < 10 ? "0" + h : h;

  // DOM element select and update it
  document.querySelector(".hours").innerHTML = h;
  document.querySelector(".minuts").innerHTML = m;
  document.querySelector(".seconds").innerHTML = s;
}

// select all button
let button = document.querySelectorAll(".groupButton button");
button.forEach((a) => {
  a.addEventListener("click", () => {
    if (a.className === "start") {
      // if sondition true dumy function run every millisecond
      interval = setInterval(conditionCheck, 1000);
    } else if (a.className === "stop") {
      // stop interval
      clearInterval(interval);
    } else if (a.className === "reset") {
      // reset everything
      reset();
    }
  });
});

function conditionCheck() {
  second++;
  // if second is greater than 59 so second value is set 0 and minut in increment
  if (second > 59) {
    second = 0;
    minut++;
  }
  if (minut > 59) {
    minut = 0;
    hour++;
  }
  if (hour > 24) {
    reset();
  }
  // update function is call
  updateValue(hour, minut, second);
}