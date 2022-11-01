import "./styles.css";

export default function createSidebar() {
  const sidebar = document.createElement("div");
  sidebar.classList.add("sidebar");
  const title = document.createElement("h1");
  title.textContent = "Lists";
  sidebar.appendChild(title);
  document.body.appendChild(sidebar);
}
