import Project from "./models/Project.js";
import Task from "./models/Task.js";
import { bindProjectEvents } from "./dom/projectEvent.js";
import { addProject, deleteProject, editProject, saveProject, showNewTask, addTaskToProject } from "./dom/projectList.js";

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

function handleEditProject(id) {
    editProject(id);
}

function handleSaveProject(id, newName) {
    const foundProject = projects.find(project => project.id === id);
    foundProject.setName(newName);
    saveProject(id);
}

function handleNewTask(id) {
    showNewTask(id);
}

function handleAddTask(id, description) {
    const task = new Task(description);
    const foundProject = projects.find(project => project.id === id);
    foundProject.addTask(task);

    console.log(projects);

    addTaskToProject(id, description);
}

bindProjectEvents({
    onCreate: handleCreateProject,
    onDelete: handleDeleteProject,
    onEdit: handleEditProject,
    onSave: handleSaveProject,
    onNewTask: handleNewTask,
    onAddTask: handleAddTask
});
