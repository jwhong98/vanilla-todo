import "./styles.css";

export default function createSidebar() {
  const sidebar = document.createElement("div");
  sidebar.classList.add("sidebar");
  const title = document.createElement("h1");
  title.textContent = "Lists";
  const button = document.createElement("button");
  button.textContent = "Create New List";
  button.classList.add("addProject", "btn", "btn-outline-primary");
  sidebar.appendChild(title);
  sidebar.appendChild(button);
  document.body.appendChild(sidebar);
}
