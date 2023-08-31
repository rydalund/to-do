const input = document.querySelector("#inputToDo");
const addBtn = document.querySelector("#submitButton");
const list = document.querySelector("#toDoList");
const msg = document.querySelector("#message");
const showCompleted = document.querySelector("#completedList");
const toDoArray = [];
let completedToDos = 0;

addBtn.addEventListener("click", addToDo);

class ToDo {
    constructor(toDoTitle) {
        this.toDoTitle = toDoTitle;
        this.toDoStatus = false;
    }
  
    set status (status) {
        this.toDoStatus = status;
      }
}

function addToDo() {
    text = input.value;
    if (text.length == 0){
        msg.innerHTML = "Input must not be empty";
        return;
    }
    else{
        let toDo = new ToDo (text);
        toDoArray.push(toDo);
        submitToDo(toDo);
    }
    msg.innerHTML = "";
}

function submitToDo(toDo) {
  let item = document.createElement("li");
  let itemLabel = document.createElement("span");
  let trash = (document.createElement("button"));

  itemLabel.innerText = toDo.toDoTitle;
  item.appendChild(itemLabel);
  list.appendChild(item);
  trash.setAttribute("class","trashButton");
  trash.appendChild(document.createTextNode("\xa0\xa0🗑️"));
  item.appendChild(trash);
  

  itemLabel.addEventListener(
    "click",

    function () {
      if (!toDo.toDoStatus) {
        toDo.toDoStatus = true;
        item.setAttribute("class", "completed");
        completedToDos++;
        keepTrack();
      }
    }
  );

  trash.addEventListener("click", () => {
    item.remove();
  });
}

function keepTrack (){
    showCompleted.innerHTML = `${completedToDos} completed`;
}