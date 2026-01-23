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

    addTaskToProject(id, description, task);
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
