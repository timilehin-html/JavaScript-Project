// start for working
// first store value
let data = [
  {
    imageRe: "./images/img1.jpg",
    name: "Mirzaban",
    jobTitle: "Web Developer",
    aboutUS:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse fuga qui est recusandae consectetur dolore aspernatur voluptate neque fugiat cum, culpa corporis sequi facere praesentium quod sit repellat dicta. Quo?",
  },
  {
    imageRe: "./images/img2.jpg",
    name: "Mirza",
    jobTitle: "Front-end Developer",
    aboutUS:
      "aperiam delectus nesciunt laudantium? Doloremque, iusto numquam commodi incidunt minus in quasi quibusdam asperiores vel laborum quis odit nulla impedit repellendus pariatur rerum dolores. Dicta!",
  },
  {
    imageRe: "./images/img3.jpg",
    name: "Mir",
    jobTitle: "Back-end Developer",
    aboutUS:
      "Suscipit neque facilis unde sed, nostrum labore non eius animi aperiam distinctio excepturi quia, ullam, tenetur libero perferendis sequi! Rem officia, officiis aliquid totam odio quos eligendi",
  },
  {
    imageRe: "./images/img4.jpg",
    name: "Sameer",
    jobTitle: "Full-stack Developer",
    aboutUS:
      "maiores labore sunt dolor rerum animi, aliquam ex est nostrum itaque ullam at fugit? Voluptatum dicta in et mollitia illo beatae ut dolore dolores voluptatibus corrupti.perferendis facere.",
  },
  {
    imageRe: "./images/img5.jpg",
    name: "Ashraf",
    jobTitle: "Full-stack Developer",
    aboutUS:
      "maiores labore sunt dolor rerum animi, aliquam ex est nostrum itaque ullam at fugit? Voluptatum dicta in et mollitia illo beatae ut dolore dolores voluptatibus corrupti.perferendis facere.",
  },
  {
    imageRe: "./images/img6.jpg",
    name: "Arshad",
    jobTitle: "Full-stack Developer",
    aboutUS:
      "maiores labore sunt dolor rerum animi, aliquam ex est nostrum itaque ullam at fugit? Voluptatum dicta in et mollitia illo beatae ut dolore dolores voluptatibus corrupti.perferendis facere.",
  },
  {
    imageRe: "./images/img7.jpg",
    name: "Akmal",
    jobTitle: "Full-stack Developer",
    aboutUS:
      "maiores labore sunt dolor rerum animi, aliquam ex est nostrum itaque ullam at fugit? Voluptatum dicta in et mollitia illo beatae ut dolore dolores voluptatibus corrupti.perferendis facere.",
  },
];
//the select the element which will be changed
let rImage = document.querySelector(".image");
let rName = document.querySelector(".nameAndWork h2");
let rJob = document.querySelector(".nameAndWork p");
let rText = document.querySelector(".aboutMe p");
// the select the element which performed the task
let rightArrow = document.querySelector(".rightArrow");
let leftArrow = document.querySelector(".leftArrow");
let randomButton = document.querySelector(".but1");
// main work for "num" variable
var num = 0;
// make function give parameter to change the value
function update(va1) {
  rImage.style.backgroundImage = `url( ${data[va1].imageRe} )`;
  rName.innerHTML = data[va1].name;
  rJob.innerHTML = data[va1].jobTitle;
  rText.innerHTML = data[va1].aboutUS;
}
// the right arrow which moves forward the element
rightArrow.addEventListener("click", () => {
  if (num >= 0 && num < data.length) {
    if (num === 0) {
      num++;
    }
    update(num);
    num++;
  } else {
    num = 0;
    update(num);
  }
});
//  the left arrow which moves backward the element
leftArrow.addEventListener("click", () => {
  if (num > 0 && num <= data.length) {
    if (num === data.length) {
      num--;
    }
    num--;
    update(num);
  } else {
    num = data.length - 1;
    update(num);
  }
});
// random generate element
randomButton.addEventListener("click", () => {
  let ramdom = Math.floor(Math.random() * data.length);
  update(ramdom);
});
