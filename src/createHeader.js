import "./styles.css";

export default function createHeader() {
  const header = document.createElement("header");
  header.classList.add("header");
  const title = document.createElement("h1");
  title.textContent = "Todo";
  header.appendChild(title);
  document.body.appendChild(header);
}
