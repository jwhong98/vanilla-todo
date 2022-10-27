import setComplete from "./setComplete";
import "./styles.css";

export default function createTodoCard(todoItem, i) {
  const display = document.querySelector("#display");
  const card = document.createElement("div");
  card.dataset.index = i;

  const title = document.createElement("p");
  const dueDate = document.createElement("p");
  const priority = document.createElement("p");
  const complete = document.createElement("p");

  title.textContent = todoItem.title;
  dueDate.textContent = todoItem.dueDate;
  priority.textContent = todoItem.priority;
  complete.textContent = todoItem.isComplete ? "Complete" : "Incomplete";

  const toggleComplete = document.createElement("button");
  toggleComplete.textContent = "complete";
  toggleComplete.addEventListener("click", () => {
    setComplete(todoItem);
    complete.textContent = todoItem.isComplete ? "Complete" : "Incomplete";
  });

  card.appendChild(title);
  card.appendChild(dueDate);
  card.appendChild(priority);
  card.appendChild(complete);
  card.appendChild(toggleComplete);

  return card;
}
