import removeTodo from "./removeTodo";
import setComplete from "./setComplete";
import "./styles.css";

export default function createTodoCard(todoItem, i, todoList) {
  const display = document.querySelector("#display");
  const card = document.createElement("div");
  card.dataset.index = i;
  card.classList.add("todoCard");

  const title = document.createElement("p");
  const dueDate = document.createElement("p");
  const priority = document.createElement("p");
  const complete = document.createElement("p");
  const buttonWrap = document.createElement("div");
  buttonWrap.classList.add("buttonWrap");

  title.textContent = todoItem.title;
  dueDate.textContent = "Complete By: " + todoItem.dueDate;
  priority.textContent = todoItem.priority;
  complete.textContent = todoItem.isComplete ? "Complete" : "Incomplete";

  const toggleComplete = document.createElement("button");
  toggleComplete.textContent = "Status";
  toggleComplete.classList.add("button");
  toggleComplete.addEventListener("click", () => {
    setComplete(todoItem);
    complete.textContent = todoItem.isComplete ? "Complete" : "Incomplete";
  });

  const remove = document.createElement("button");
  remove.textContent = "Remove";
  remove.classList.add("button");
  remove.addEventListener("click", () => {
    removeTodo(todoList, i);
  });

  buttonWrap.appendChild(toggleComplete);
  buttonWrap.appendChild(remove);

  card.appendChild(title);
  card.appendChild(dueDate);
  card.appendChild(priority);
  card.appendChild(complete);
  card.appendChild(buttonWrap);

  return card;
}
