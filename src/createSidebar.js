import "./styles.css";

export default function createSidebar() {
  const sidebar = document.createElement("div");
  sidebar.classList.add("sidebar");

  const title = document.createElement("h1");
  title.textContent = "Lists";

  const projectContainer = document.createElement("div");
  projectContainer.classList.add("projectContainer");

  const formContainer = document.createElement("div");
  formContainer.classList.add("newProjContainer");

  const newProject = document.createElement("form");
  newProject.classList.add("newProjectForm");

  const formInput = document.createElement("input");
  formInput.classList.add("newProjInput");
  newProject.appendChild(formInput);

  const submit = document.createElement("button");
  submit.classList.add("newProjSubmit");
  submit.textContent = "create";
  newProject.appendChild(submit);

  formContainer.appendChild(newProject);

  const button = document.createElement("button");
  button.textContent = "Create New List";
  button.classList.add("addProject", "btn", "btn-outline-primary");

  button.addEventListener("click", () => {
    formContainer.classList.toggle("active");
  });

  sidebar.appendChild(title);
  sidebar.appendChild(projectContainer);
  sidebar.appendChild(formContainer);
  sidebar.appendChild(button);
  document.body.appendChild(sidebar);
}
