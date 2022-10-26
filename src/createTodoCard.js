import "./styles.css";

export default function createTodoCard(todoItem, i) {
  const content = document.querySelector("#content");
  const card = document.createElement("div");
  card.dataset.index = i;

  const title = document.createElement("p");
  const dueDate = document.createElement("p");
  const priority = document.createElement("p");

  title.textContent = todoItem.title;
  dueDate.textContent = todoItem.dueDate;
  priority.textContent = todoItem.priority;

  const toggleComplete = document.createElement("button");
  toggleComplete.textContent = "complete";
  toggleComplete.addEventListener("click", () => {
    todoItem.complete = !todoItem.complete; // ?
  });

  card.appendChild(title);
  card.appendChild(dueDate);
  card.appendChild(priority);

  content.appendChild(card);
}
