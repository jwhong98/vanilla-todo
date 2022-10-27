import displayTodos from "./displayTodos";

export default function removeTodo(project, i) {
  project.splice(i, 1);
  displayTodos(project);
}
