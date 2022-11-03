export const projectHandler = (function () {
  let projectList = [];
  let currentProject = "home";

  function getAllProjects() {
    return projectList;
  }

  function getCurrentProject() {
    return currentProject;
  }

  function changeCurrentProject(name) {
    currentProject = name;
  }

  function createProject(title) {
    if (!title) {
      alert("Title required");
    } else {
      const todos = [];
      changeCurrentProject(title);
      return {
        title,
        todos,
      };
    }
  }

  function addNewProject(project) {
    if (projectList.find((el) => el.title === project.title)) {
      alert("Project already exists!");
    } else {
      projectList.push(project);
    }
  }

  return {
    getAllProjects,
    getCurrentProject,
    changeCurrentProject,
    createProject,
    addNewProject,
  };
})();
