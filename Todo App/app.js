// select items from DOM
let elements = {
    hamburgerItem : ".hamburgerIcon",
    sideBar : ".sideBar",
    sideBarHamburger : ".hamburger",
    table : ".table",
    rightIconToAddElement : ".addIcon"
}

let text, checkBox;
let arr = [];

let hamburgerItem = document.querySelector(elements.hamburgerItem);
let sideBarHamburger = document.querySelector(elements.sideBarHamburger);
let sideBar = document.querySelector(elements.sideBar);
let rightHamburger = document.querySelector(elements.rightIconToAddElement);

hamburgerItem.addEventListener("click", displaySideNavBar);
sideBarHamburger.addEventListener("click", hiddenSideBar);
rightHamburger.addEventListener("click", createToDo);

function displaySideNavBar () {
    if(sideBar.style.transform = "translateX(-400px)"){
        sideBar.style.transform = "translateX(0px)";
    }else{
        sideBar.style.transform = "translateX(-400px)";
    }
}

function hiddenSideBar () {
    sideBar.style.transform = "translateX(-400px)";
}


function createToDo () {
    let table = document.querySelector(elements.table);
    // create html elements through javascript 
    let tr = document.createElement("tr");
    let td = document.createElement("td");
    checkBox = document.createElement("input");    
    text = document.createElement("input");
    let delete1 = document.createElement("button");
    let update = document.createElement("button");

    // create text to add delete and update button
    // let textDelet = document.createTextNode("Delete");
    delete1.append("Delete");
    update.append("Update");
    delete1.setAttribute("onclick", "deleteItem(this)");
    update.setAttribute("onclick", "updateButtonAction(this)");
    // set attribute
    checkBox.setAttribute("type", "checkbox");
    text.setAttribute("autofocus", true);
    text.setAttribute("type", "text");
    text.setAttribute("placeholder", "Text");
    delete1.setAttribute("class", "deleteButton");
    update.setAttribute("class", "updateButton");
    
    // upend element with each other
    td.appendChild(checkBox);
    td.appendChild(text);
    td.appendChild(delete1);
    td.appendChild(update);
    tr.appendChild(td);
    table.appendChild(tr);
    
    arr.push(tr);
    if(arr.length > 0){
        table.insertBefore(tr, table.childNodes[0]);
    }
}


window.addEventListener("keypress", (e)=> {
    if(e.which === 13 && e.keyCode === 13) {
        enterKeyPressWhenSomeActionDone();
        asd();
    }
})

function enterKeyPressWhenSomeActionDone () {
    text.setAttribute("readOnly", true);
    text.style.backgroundColor = "transparent";
}

function asd () {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].children[0].children[1].getAttribute("readOnly")){
            arr[i].children[0].children[1].removeAttribute("readOnly");
            arr[i].children[0].children[1].style.backgroundColor = "transparent";
            console.log("one");
        }else{
            arr[i].children[0].children[1].setAttribute("readOnly", true);
            arr[i].children[0].children[1].style.backgroundColor = "transparent";
            console.log("two");
        }
    }
}

function updateButtonAction (e) {
    let a = e.parentNode.children[1];
    a.removeAttribute("readOnly");
    a.style.backgroundColor = "#eee";
}


window.addEventListener("change", ()=> {
    for(let i = 0; i < arr.length; i++) {
        let a = arr[i].children[0].children[1];
        if(arr[i].children[0].children[0].checked){
            a.style.textDecoration = "line-through"; // text-decoration: line-through;
            a.style.color = "#ccc";
        }
        else{
            a.style.textDecoration = "none"; // text-decoration: none;
            a.style.color = "#333";
        }
    }
    if(arr.length >= 0){
        enterKeyPressWhenSomeActionDone();
    }
})

function deleteItem (e) {
    e.parentNode.parentNode.remove(); 
    let a = arr.lastIndexOf(e.parentNode.parentNode);
    arr.splice(a, 1);
}