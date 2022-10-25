import createHeader from "./createHeader";
import createSidebar from "./createSidebar";
import "./styles.css";

createHeader();
createSidebar();

const content = document.querySelector("#content");
const todoList = [];

const addTodoForm = () => {
  const form = document.createElement("form");
  form.classList.add("form");
};
