export default function createTodo(title, disc, dueDate, priority, project) {
  project ? project : "";
  return {
    title,
    disc,
    dueDate,
    priority,
    project: project ? project : "",
    isComplete: false,
  };
}
