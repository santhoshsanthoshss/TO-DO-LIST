let wrapper = document.getElementById("wrapper");
let input = document.getElementById("input");
let button = document.getElementById("add");
let todoList = document.getElementById("todoList");
let deletebtn = document.getElementById("deletebtn");

let todo = [];
window.onload = () => {
  todo = JSON.parse(localStorage.getItem("todo")) || [];
  todo.map((todouser) => {
    addtodo(todouser);
  });
};
button.addEventListener("click", () => {
  todo.push(input.value);
  localStorage.setItem("todo", JSON.stringify(todo));

  addtodo(input.value);
});

function addtodo(todouser) {
  let list = document.createElement("li");
  list.innerText = todouser;
  todoList.append(list);
  list.className = "userclicks";
  list.addEventListener("click", () => {
    list.style.textDecoration = "line-through";
    remove(todouser);
  });
  list.addEventListener("dblclick", (event) => {
    todoList.removeChild(list);
    // event.target.remove(list);
    remove(todouser);
  });
}

function remove(todouser) {
  let index = todo.indexOf(todouser);
  if (index > -1) {
    todo.splice(index, 1);
  }
}
