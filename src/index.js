import Project from "./models/Project.js";
import Task from "./models/Task.js";
import { bindProjectEvents } from "./dom/projectEvent.js";
import { addProject, deleteProject, editProject, saveProject, showNewTask, addTaskToProject, deleteTask, editTask, saveTask } from "./dom/projectList.js";

let projects = [];

function handleCreateProject(name) {
    const project = new Project(name);
    projects.push(project);
    addProject(project);
}

function handleDeleteProject(projectId) {
    projects = projects.filter(project => project.getId() !== projectId);
    deleteProject(projectId);
}

function handleEditProject(projectId) {
    editProject(projectId);
}

function handleSaveProject(projectId, newName) {
    const foundProject = projects.find(project => project.id === projectId);
    foundProject.setName(newName);
    saveProject(projectId);
}

function handleNewTask(projectId) {
    showNewTask(projectId);
}

function handleAddTask(projectId, description) {
    const task = new Task(description);
    const foundProject = projects.find(project => project.id === projectId);
    foundProject.addTask(task);

    addTaskToProject(projectId, description, task);
}

function handleDeleteTask(projectId, taskId) {
    const foundProject = projects.find(project => project.id === projectId);
    foundProject.deleteTask(taskId);

    deleteTask(projectId, taskId);
}

function handleEditTask(projectId, taskId) {
    editTask(projectId, taskId);
}

function handleSaveTask(projectId, taskId, newDesc) {
    const foundProject = projects.find(project => project.id === projectId);
    const foundTask = foundProject.tasks.find(task => task.getId() === taskId);
    foundTask.setDescription(newDesc);

    saveTask(projectId, taskId, newDesc);
}

bindProjectEvents({
    onCreate: handleCreateProject,
    onDelete: handleDeleteProject,
    onEdit: handleEditProject,
    onSave: handleSaveProject,
    onNewTask: handleNewTask,
    onAddTask: handleAddTask,
    onDeleteTask: handleDeleteTask,
    onEditTask: handleEditTask,
    onSaveTask: handleSaveTask
});
