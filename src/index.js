import Project from "./models/Project.js";
import { bindProjectEvents } from "./dom/projectEvent.js";
import { addProject, deleteProject } from "./dom/projectList.js";

let projects = [];

function handleCreateProject(name) {
    const project = new Project(name);
    projects.push(project);
    addProject(project);
}

function handleDeleteProject(id) {
    projects = projects.filter(project => project.getId() !== id);
    deleteProject(id);
}

bindProjectEvents({
    onCreate: handleCreateProject,
    onDelete: handleDeleteProject
});
