import { projectHandler } from "./projectHandler";
import displayTodos from "./displayTodos";

export default function projectCard(project) {
  const container = document.createElement("div");
  container.dataset.proj = project.title;
  container.classList.add("projectItem");
  container.textContent = project.title;

  container.addEventListener("click", (e) => {
    let target = projectHandler
      .getAllProjects()
      .find((el) => el.title === e.target.dataset.proj);
    displayTodos(target.todos);
  });
  return container;
}
