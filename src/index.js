import createHeader from "./createHeader";
import createSidebar from "./createSidebar";
import createTodo from "./createTodo";
import "./styles.css";

createHeader();
createSidebar();

const content = document.querySelector("#content");
const todoList = [];
const form = document.querySelector(".formContainer");
const addTodo = document.querySelector(".addTodo");
const submitButton = document.querySelector(".submit");

addTodo.addEventListener("click", () => {
  form.classList.toggle("active");
});

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  let title = document.getElementById("title").value;
  console.log(title);
  let description = document.getElementById("description").value;
  let dueDate = document.getElementById("dueDate").value;
  let priority = document.querySelector('input[name="prio"]:checked').value;
  todoList.push(createTodo(title, description, dueDate, priority));
  form.classList.toggle("active");
  console.log(todoList);
});
