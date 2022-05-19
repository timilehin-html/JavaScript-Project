// select items from DOM
let elements = {
    hamburgerItem : ".hamburgerIcon",
    sideBar : ".sideBar",
    sideBarHamburger : ".hamburger",
    table : ".table",
    rightIconToAddElement : ".addIcon",
    text : ".text",
    task : ".tasks",
    body: "body",
    column1 : ".col1",
    heading : ".col1 .heading",
    about : ".about",
    tableContainer : ".tableContainer",
    darkTheme : ".dark",
    lightTheme : ".light",
    leftAngle : ".hamburger .fa-angle-left",
    userName : ".userName",
    list : ".list",
    progress : ".fa-bars-progress",
    eject : ".fa-eject",
    column2 : ".col2",
    instruction : ".instruction",
    longText : ".longText",
    thanksMessage : ".thanksMessage",
    followMe : ".followMe h3",
    portfolio : ".portfolio h3",
    copyrightMessage : ".copyrightMessage"

}

let hamburgerItem = document.querySelector(elements.hamburgerItem);
let sideBarHamburger = document.querySelector(elements.sideBarHamburger);
let sideBar = document.querySelector(elements.sideBar);
let rightHamburger = document.querySelector(elements.rightIconToAddElement);
let task = document.querySelector(elements.task);
let text1 = document.querySelector(elements.text);
let body = document.querySelector(elements.body);
let column1 = document.querySelector(elements.column1);
let heading = document.querySelector(elements.heading);
let about = document.querySelector(elements.about);
let tableContainer = document.querySelector(elements.tableContainer);
let darkTheme = document.querySelector(elements.darkTheme);
let lightTheme = document.querySelector(elements.lightTheme);
let leftAngle = document.querySelector(elements.leftAngle);
let userName = document.querySelector(elements.userName);
let list = document.querySelector(elements.list);
let progress = document.querySelector(elements.progress);
let eject = document.querySelector(elements.eject);
let column2 = document.querySelector(elements.column2);
let instruction = document.querySelector(elements.instruction);
let longText = document.querySelector(elements.longText);
let thanksMessage = document.querySelector(elements.thanksMessage);
let followMe = document.querySelector(elements.followMe);
let portfolio = document.querySelector(elements.portfolio);
let copyrightMessage = document.querySelector(elements.copyrightMessage);


hamburgerItem.addEventListener("click", displaySideNavBar);
sideBarHamburger.addEventListener("click", hiddenSideBar);
task.addEventListener("click", changed);
about.addEventListener("click", changed1);
darkTheme.addEventListener("click", dark);
// lightTheme.addEventListener("click", light);

let flag = false;

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
let text, checkBox;
let arr = [];

    rightHamburger.addEventListener("click", createToDo);

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
                if(flag === false) {
                    a.style.textDecoration = "none"; // text-decoration: none;
                    a.style.color = "#333";
                }else{
                    a.style.textDecoration = "none";
                    a.style.backgroundColor = "#262a40";
                    a.style.color = "#ccc";
                }
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


function changed () {
    text1.style.display = "none";
    body.style.backgroundColor = "#5352ed";
    column1.style.backgroundImage = "url('./images/Sample\ 10.png')";
    column1.style.backgroundPosition = "bottom";
    column1.style.backgroundSize = "cover";
    heading.innerHTML = "<h1>What's up, Brother!</h1>";
    rightHamburger.style.transform = "translateX(0)";
    sideBar.style.transform = "translateX(-400px)";
    tableContainer.style.display = "block";
}

function changed1 () {
    text1.style.display = "block";
    body.style.backgroundColor = "#8ec7ff";
    column1.style.backgroundImage = "url('./images/img2.png')";
    column1.style.backgroundPosition = "center";
    column1.style.backgroundSize = "center";
    heading.innerHTML = "<h1>About us</h1>";
    rightHamburger.style.transform = "translateX(200px)";
    sideBar.style.transform = "translateX(-400px)";
    tableContainer.style.display = "none";
}

function dark () {
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
}