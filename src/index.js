import Project from "./models/Project.js";
import Task from "./models/Task.js";
import { bindProjectEvents } from "./dom/projectEvent.js";
import { addProject, deleteProject, editProject, saveProject, showNewTask, addTaskToProject, deleteTask, editTask, saveTask, toggleTask } from "./dom/projectList.js";

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
    const foundProject = projects.find(project => project.id === projectId);
    const task = new Task(description);
    foundProject.addTask(task);

    console.log(foundProject);

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

    console.log(foundProject);

    saveTask(projectId, taskId, newDesc);
}

function handleToggleTask(projectId, taskId, checked) {
    const foundProject = projects.find(project => project.id === projectId);
    const foundTask = foundProject.tasks.find(task => task.getId() === taskId);

    foundTask.setCompleted(checked);

    console.log(foundProject);

    toggleTask(projectId, taskId);
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
    onSaveTask: handleSaveTask,
    onToggleTask: handleToggleTask
});
