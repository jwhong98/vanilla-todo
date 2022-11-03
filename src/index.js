import createHeader from "./createHeader";
import createSidebar from "./createSidebar";
import createTodo from "./createTodo";
import displayTodos from "./displayTodos";
import "./styles.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import projectCard from "./projectCard";
import { projectHandler } from "./projectHandler";

createHeader();
createSidebar();

const display = document.querySelector("#display");
const todoList = [];

const home = projectHandler.createProject("home");
projectHandler.addNewProject(home);
console.log(projectHandler.getAllProjects());
const selectedProject = projectHandler
  .getAllProjects()
  .find((el) => el.title === projectHandler.getCurrentProject());
console.log(selectedProject);

const form = document.querySelector(".formContainer");
const addTodo = document.querySelector(".addTodo");
const submitButton = document.querySelector(".submit");
const cancelButton = document.querySelector(".cancelBtn");
const projectContainer = document.querySelector(".projectContainer");
const newProjectButton = document.querySelector(".newProjSubmit");
const newProjectInput = document.querySelector(".newProjInput");

projectHandler
  .getAllProjects()
  .map((el) => projectContainer.appendChild(projectCard(el)));

addTodo.addEventListener("click", () => {
  form.classList.toggle("active");
});

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  let title = document.getElementById("title").value;
  let description = document.getElementById("description").value;
  let dueDate = document.getElementById("dueDate").value;
  let priority = document.querySelector('input[name="prio"]:checked').value;
  let project = "";
  let newTodo = createTodo(title, description, dueDate, priority, project);
  selectedProject.todos.push(newTodo);
  displayTodos(selectedProject.todos);
  document.getElementById("form").reset(); //clear form inputs
  form.classList.toggle("active");
});

cancelButton.addEventListener("click", () => {
  document.getElementById("form").reset();
  form.classList.toggle("active");
});

newProjectButton.addEventListener("click", (e) => {
  e.preventDefault();
  const newProj = projectHandler.createProject(newProjectInput.value);
  newProj ? projectHandler.addNewProject(newProj) : "";
  document.querySelector(".newProjectForm").reset();
  document.querySelector(".newProjContainer").classList.toggle("active");

  while (projectContainer.firstChild) {
    projectContainer.removeChild(projectContainer.firstChild);
  }
  projectHandler
    .getAllProjects()
    .map((el) => projectContainer.appendChild(projectCard(el)));
});
