import "./styles.css";

export default function createSidebar() {
  const sidebar = document.createElement("div");
  sidebar.classList.add("sidebar");
  sidebar.textContent = "sidebar";
  document.body.appendChild(sidebar);
}
