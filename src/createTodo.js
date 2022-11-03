export default function createTodo(title, desc, dueDate, priority, project) {
  return {
    title,
    desc: desc || "No Description",
    dueDate,
    priority,
    project: project || "",
    isComplete: false,
  };
}
