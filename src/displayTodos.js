import createTodoCard from "./createTodoCard";

export default function displayTodos(project) {
  const display = document.querySelector("#display");
  while (display.firstChild) {
    display.removeChild(display.firstChild);
  }
  project.map((el, i) => display.appendChild(createTodoCard(el, i)));
}
