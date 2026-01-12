import Project from "./models/project.js";
import { bindProjectEvents } from "./dom/projectEvent.js";
import { renderProject } from "./dom/projectList.js";

let projects = [];

function handleCreateProject(name) {
    const project = new Project(name);
    projects.push(project);
    renderProject(project);
}

bindProjectEvents({
    onCreate: handleCreateProject
});
