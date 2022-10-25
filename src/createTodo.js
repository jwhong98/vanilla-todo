export default function createTodo(title, disc, dueDate, priority) {
  return {
    title,
    disc,
    dueDate,
    priority,
    isComplete: false,
  };
}
