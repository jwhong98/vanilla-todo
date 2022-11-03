export default function projectCard(project) {
  const container = document.createElement("div");
  container.dataset.proj = project.title;
  container.classList.add("projectItem");
  container.textContent = project.title;

  container.addEventListener("click", (e) => {
    console.log(e.target.dataset.proj);
  });
  return container;
}
