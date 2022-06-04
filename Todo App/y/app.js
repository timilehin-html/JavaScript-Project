// select items from DOM
let elements = {
  hamburgerItem: ".hamburgerIcon",
  sideBar: ".sideBar",
  sideBarHamburger: ".hamburger",
  table: ".table",
  rightIconToAddElement: ".addIcon",
  text: ".text",
  task: ".tasks",
  body: "body",
  column1: ".col1",
  heading: ".col1 .heading",
  about: ".about",
  tableContainer: ".tableContainer",
  darkTheme: ".dark",
  lightTheme: ".light",
  leftAngle: ".hamburger .fa-angle-left",
  userName: ".userName",
  list: ".list",
  progress: ".fa-bars-progress",
  eject: ".fa-eject",
  column2: ".col2",
  instruction: ".instruction",
  longText: ".longText",
  thanksMessage: ".thanksMessage",
  followMe: ".followMe h3",
  portfolio: ".portfolio h3",
  copyrightMessage: ".copyrightMessage",
  hour: ".hour",
  minut: ".minut",
  second: ".second",
  pmAndAm: ".pmAndAm",
  period: ".period",
  emoji: ".emoji",
};
// flag
let flag = false;
let flagforButton = false;
// declearation all variable
let hamburgerItem,
  sideBarHamburger,
  sideBar,
  rightHamburger,
  task,
  text1,
  body,
  column1,
  heading,
  about,
  tableContainer,
  darkTheme,
  lightTheme,
  leftAngle,
  userName,
  list,
  progress,
  eject,
  column2,
  instruction,
  longText,
  thanksMessage,
  followMe,
  portfolio,
  copyrightMessage,
  hours,
  minut,
  second,
  pmAndAm,
  period,
  emoji;
// global variable
let inputFeild, checkBox, update;

let arr = [];
// audio add for add button
const audio = new Audio();
audio.src = "./sound effect/41957518_pen-click-01.wav";
// element get from html
{
  hamburgerItem = document.querySelector(elements.hamburgerItem);
  sideBarHamburger = document.querySelector(elements.sideBarHamburger);
  sideBar = document.querySelector(elements.sideBar);
  rightHamburger = document.querySelector(elements.rightIconToAddElement);
  task = document.querySelector(elements.task);
  text1 = document.querySelector(elements.text);
  body = document.querySelector(elements.body);
  column1 = document.querySelector(elements.column1);
  heading = document.querySelector(elements.heading);
  about = document.querySelector(elements.about);
  tableContainer = document.querySelector(elements.tableContainer);
  darkTheme = document.querySelector(elements.darkTheme);
  lightTheme = document.querySelector(elements.lightTheme);
  leftAngle = document.querySelector(elements.leftAngle);
  userName = document.querySelector(elements.userName);
  list = document.querySelector(elements.list);
  progress = document.querySelector(elements.progress);
  eject = document.querySelector(elements.eject);
  column2 = document.querySelector(elements.column2);
  instruction = document.querySelector(elements.instruction);
  longText = document.querySelector(elements.longText);
  thanksMessage = document.querySelector(elements.thanksMessage);
  followMe = document.querySelector(elements.followMe);
  portfolio = document.querySelector(elements.portfolio);
  copyrightMessage = document.querySelector(elements.copyrightMessage);
  hours = document.querySelector(elements.hour);
  minut = document.querySelector(elements.minut);
  second = document.querySelector(elements.second);
  pmAndAm = document.querySelector(elements.pmAndAm);
  period = document.querySelector(elements.period);
  emoji = document.querySelector(elements.emoji);
}
// all event listener
hamburgerItem.addEventListener("click", displaySideNavBar);
sideBarHamburger.addEventListener("click", hiddenSideBar);
task.addEventListener("click", changed);
about.addEventListener("click", changed1);
darkTheme.addEventListener("click", dark);
lightTheme.addEventListener("click", light);
rightHamburger.addEventListener("click", createToDo);

// side navbar closing and opening listener
function displaySideNavBar() {
  if ((sideBar.style.transform = "translateX(-400px)")) {
    sideBar.style.transform = "translateX(0px)";
    audio.play();
  } else {
    sideBar.style.transform = "translateX(-400px)";
    audio.play();
  }
}
// close listener
function hiddenSideBar() {
  sideBar.style.transform = "translateX(-400px)";
  audio.play();
}
// create DOM
function createToDo() {
  let table, tr, td, deleteButton;

  table = document.querySelector(elements.table);

  let elementName = {
    tr: "tr",
    td: "td",
    input: "input",
    button: "button",
  };

  tr = document.createElement(elementName.tr);
  td = document.createElement(elementName.td);
  checkBox = document.createElement(elementName.input);
  inputFeild = document.createElement(elementName.input);
  deleteButton = document.createElement(elementName.button);
  update = document.createElement(elementName.button);

  deleteButton.append("Delete");
  update.append("Update");
  deleteButton.setAttribute("onclick", "deleteItem(this)");
  checkBox.setAttribute("type", "checkbox");
  inputFeild.setAttribute("type", "text");
  inputFeild.setAttribute("placeholder", "Text");
  deleteButton.setAttribute("class", "deleteButton");
  update.setAttribute("class", "updateButton");

  // upend element with each other
  td.appendChild(checkBox);
  td.appendChild(inputFeild);
  td.appendChild(deleteButton);
  td.appendChild(update);
  tr.appendChild(td);
  table.appendChild(tr);

  setTimeout(() => {
    tr.style.transform = "scale(1)";
  }, 100);

  // push element in array
  arr.push(tr);
  // insert element before
  if (arr.length > 0) {
    table.insertBefore(tr, table.childNodes[0]);
  }
  // auto focus set
  inputFeild.focus();

  audio.play();
  update.style.opacity = "0.5";
}
// current input field change into text and remove background color
function enterKeyPressWhenSomeActionDone() {
  inputFeild.setAttribute("readonly", true);
  inputFeild.style.backgroundColor = "transparent";
}
// when click update button check some condition in input field
function UpdateCheckInputFeild() {
  audio.play();
  if (flagforButton === true) {
    for (let i = 0; i < arr.length; i++) {
      if ((arr[i].children[0].children[1].style.backgroundColor = "#eee")) {
        arr[i].children[0].children[1].setAttribute("readOnly", true);
        arr[i].children[0].children[1].style.backgroundColor = "transparent";
      }
    }
    flagforButton = false;
  }
}
// update button
function updateButtonAction(e) {
  audio.play();
  let secondTD;

  secondTD = e.parentNode.children[1];
  secondTD.removeAttribute("readOnly");
  secondTD.style.backgroundColor = "#eee";
  // global flag
  flagforButton = true;

  for (let i = 0; i < arr.length; i++) {
    if (!arr[i].children[0].children[1].readOnly === true) {
      arr[i].children[0].children[1].focus();
    }
  }
}
// check box condition function
function checkBoxCondition() {
  audio.play();
  let getTd, checkCheckBox, updateBtn;

  for (let i = 0; i < arr.length; i++) {
    getTd = arr[i].children[0].children[1];
    checkCheckBox = arr[i].children[0].children[0];
    updateBtn = arr[i].children[0].children[3];

    if (checkCheckBox.checked) {
      if (flag === false) {
        getTd.style.textDecoration = "line-through";
        getTd.style.color = "#ccc";
      } else {
        getTd.style.textDecoration = "line-through";
        getTd.style.color = "#8f8f8f";
      }
      updateBtn.removeAttribute("onclick");
      updateBtn.style.opacity = "0.5";
    } else {
      if (flag === false) {
        getTd.style.textDecoration = "none";
        getTd.style.color = "#333";
      } else {
        getTd.style.textDecoration = "none";
        // getTd.style.backgroundColor = "#262a40";
        getTd.style.color = "#ccc";
      }
      updateBtn.setAttribute("onclick", "updateButtonAction(this)");
      updateBtn.style.opacity = "1";
    }
  }
  if (arr.length >= 0) {
    enterKeyPressWhenSomeActionDone();
  }
}
// delte items button function
function deleteItem(e) {
  audio.play();
  let lastElement;

  e.parentNode.parentNode.style.transform = "scale(0)";
  // take some time to remove element
  setTimeout(() => {
    e.parentNode.parentNode.remove();
  }, 400);

  lastElement = arr.lastIndexOf(e.parentNode.parentNode);

  arr.splice(lastElement, 1);
}
// about page content
function changed() {
  audio.play();
  text1.style.display = "none";
  body.style.backgroundColor = "#5352ed";
  column1.style.backgroundImage = "url('./images/Sample 10.png')";
  column1.style.backgroundPosition = "bottom";
  column1.style.backgroundSize = "cover";
  heading.innerHTML = "<h1>What's up, Brother!</h1>";
  rightHamburger.style.transform = "translateX(0)";
  sideBar.style.transform = "translateX(-400px)";
  tableContainer.style.display = "block";
}
// todo page content
function changed1() {
  audio.play();
  text1.style.display = "block";
  body.style.backgroundColor = "#8ec7ff";
  column1.style.backgroundImage = "url('./images/img2.png')";
  column1.style.backgroundPosition = "center";
  heading.innerHTML = "<h1>About us</h1>";
  rightHamburger.style.transform = "translateX(200px)";
  sideBar.style.transform = "translateX(-400px)";
  tableContainer.style.display = "none";
}
// dark theme function
function dark() {
  audio.play();
  flag = true;
  sideBar.style.backgroundColor = "rgb(36 46 86)";
  leftAngle.style.borderColor = "#13269b";
  userName.style.color = "#eee";
  list.style.color = "#fff";
  progress.style.color = "#eeeeeeb0";
  eject.style.color = "#eeeeeeb0";
  lightTheme.style.color = "#fff";
  column2.style.backgroundColor = "#161929";
  instruction.style.color = "#fff";
  longText.style.color = "#ccc";
  thanksMessage.style.color = "#ccc";
  followMe.style.color = "#fff";
  portfolio.style.color = "#fff";
  copyrightMessage.style.color = "#ccc";
  checkBoxCondition();
}
// light theme function
function light() {
  audio.play();
  flag = false;
  sideBar.style.backgroundColor = "rgb(255 255 255)";
  leftAngle.style.borderColor = "#ccc";
  userName.style.color = "#4f5d9d";
  list.style.color = "#6985bf";
  progress.style.color = "#6985bf";
  eject.style.color = "#6985bf";
  lightTheme.style.color = "#020a31";
  column2.style.backgroundColor = "#fff";
  instruction.style.color = "#333";
  longText.style.color = "#333";
  thanksMessage.style.color = "#333";
  followMe.style.color = "#333";
  portfolio.style.color = "#333";
  copyrightMessage.style.color = "#333";
  checkBoxCondition();
}

// when any key press from keyboard anywhere in all window this function is run
window.addEventListener("keypress", (e) => {
  if (e.which === 13 && e.keyCode === 13) {
    enterKeyPressWhenSomeActionDone();
    UpdateCheckInputFeild();
    update.setAttribute("onclick", "updateButtonAction(this)");
  }
});
window.addEventListener("change", checkBoxCondition);
// timing section
window.addEventListener("load", () => {
  setInterval(() => {
    let date = new Date();
    let hours1 = date.getHours();
    let minut1 = date.getMinutes();
    let second1 = date.getSeconds();

    let amAndpm = hours1 > 12 ? "PM" : "AM";
    hours1 = hours1 > 12 ? hours1 - 12 : hours1;

    if (hours1 == 0) {
      hours1 = 1;
    }
    if (hours1 < 10) {
      hours1 = `0${hours1}`;
    }
    if (minut1 < 10) {
      minut1 = `0${minut1}`;
    }
    if (second1 < 10) {
      second1 = `0${second1}`;
    }

    // console.log(hours, minut, second , amAndpm);
    hours.innerHTML = `${hours1}:`;
    minut.innerHTML = `${minut1}:`;
    second.innerHTML = `${second1}`;
    pmAndAm.innerHTML = amAndpm;
  }, 1000);
});
// good
window.addEventListener("load", () => {
  let date = new Date();
  date.setHours(20);
  let hours = date.getHours();

  if (hours >= 5 && hours < 12) {
    // console.log("Good Morning");
    period.innerHTML = "Good Morning";
    emoji.innerHTML = "🥱";
  } else if (hours >= 12 && hours <= 17) {
    // console.log("Good Afternoon");
    period.innerHTML = "Good Afternoon";
    emoji.innerHTML = "😎";
  } else {
    // console.log("Good Evening");
    period.innerHTML = "Good Evening";
    emoji.innerHTML = "😀";
  }
});