import "./styles.css";

export default function createHeader() {
  const header = document.createElement("header");
  header.classList.add("header");
  header.textContent = "header";
  document.body.appendChild(header);
}
