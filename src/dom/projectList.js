export function addProject(project) {
    const projectList = document.getElementById("project-list");
    const li = document.createElement("li");
    
    li.dataset.projectId = project.getId();

    const span = document.createElement("span");
    span.classList.add("project-name")
    span.textContent = project.getName();

    const input = document.createElement("input");
    input.type = "text";
    input.dataset.role = "project-input";
    input.classList.add("hide");

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.dataset.action = "edit";

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.dataset.action = "delete";

    const saveButton = document.createElement("button");
    saveButton.textContent = "Save";
    saveButton.dataset.action = "save";
    saveButton.classList.add("hide");

    const newTaskButton = document.createElement("button");
    newTaskButton.textContent = "+ New Task";
    newTaskButton.dataset.action = "new-task";

    const taskList = document.createElement("ul");
    const taskInput = document.createElement("input");
    taskInput.type = "text";
    taskInput.dataset.role = "task-input";
    taskInput.classList.add("hide");

    const enterTaskButton = document.createElement("button");
    enterTaskButton.textContent = "+ Add Task";
    enterTaskButton.dataset.action = "add-task"
    enterTaskButton.classList.add("hide");

    taskList.appendChild(taskInput);
    taskList.appendChild(enterTaskButton);

    li.appendChild(span);
    li.appendChild(input);
    li.appendChild(editButton);
    li.appendChild(saveButton);
    li.appendChild(deleteButton);
    li.appendChild(newTaskButton);

    li.append(taskList);

    projectList.appendChild(li);
}

export function deleteProject(projectId) {
    const project = document.querySelector(`[data-project-id="${projectId}"]`);

    project.remove();
}

export function editProject(projectId) {
    const project = document.querySelector(`[data-project-id="${projectId}"]`);    

    project.querySelector("input").value = project.querySelector("span").textContent;
    project.querySelector("span").classList.add("hide");
    project.querySelector("input").classList.remove("hide");
    project.querySelector("[data-action='save']").classList.remove("hide");
    project.querySelector("[data-action='edit']").classList.add("hide");
}

export function saveProject(projectId) {
    const project = document.querySelector(`[data-project-id="${projectId}"]`); 
    const newName = project.querySelector("input").value;

    project.querySelector("span").textContent = newName;    
    project.querySelector("span").classList.remove("hide");
    project.querySelector("input").classList.add("hide");
    project.querySelector("[data-action='save']").classList.add("hide");
    project.querySelector("[data-action='edit']").classList.remove("hide"); 

}

export function showNewTask(projectId) {
    const project = document.querySelector(`[data-project-id="${projectId}"]`); 
    const taskInput = project.querySelector("[data-role='task-input']");

    taskInput.classList.remove("hide");
    project.querySelector("[data-action='add-task']").classList.remove("hide"); 
}

export function addTaskToProject(projectId, description, task) {
    const project = document.querySelector(`[data-project-id="${projectId}"]`); 
    const taskInput = project.querySelector("[data-role='task-input']");

    const li = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = description;

    li.dataset.taskId = task.getId();

    const input = document.createElement("input");
    input.type = "text";
    input.dataset.role = "task-editinput";
    input.classList.add("hide");

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.dataset.action = "edit-task";

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.dataset.action = "delete-task";

    const saveButton = document.createElement("button");
    saveButton.textContent = "Save";
    saveButton.dataset.action = "save-task";
    saveButton.classList.add("hide");
    
    const taskCheckBox = document.createElement("input");
    taskCheckBox.type = "checkbox";
    taskCheckBox.dataset.role = "task-complete";
    taskCheckBox.classList.add("task-checkbox")

    const taskDate = document.createElement("input");
    taskDate.type = "date";
    taskDate.value = task.getDate();
    taskDate.dataset.role = "task-date";

    const prioritySelect = document.createElement("select");
    prioritySelect.name = "priority";
    prioritySelect.dataset.role = "task-priority";

    const priorityOptionNone = document.createElement("option");
    priorityOptionNone.value = "none";
    priorityOptionNone.textContent = "None";
    const priorityOptionLow = document.createElement("option");
    priorityOptionLow.value = "low";
    priorityOptionLow.textContent = "Low";
    const priorityOptionMedium = document.createElement("option");
    priorityOptionMedium.value = "medium";
    priorityOptionMedium.textContent = "Medium";
    const priorityOptionHigh = document.createElement("option");
    priorityOptionHigh.value = "high";
    priorityOptionHigh.textContent = "High";

    prioritySelect.appendChild(priorityOptionNone);
    prioritySelect.appendChild(priorityOptionLow);
    prioritySelect.appendChild(priorityOptionMedium);
    prioritySelect.appendChild(priorityOptionHigh);

    li.appendChild(taskCheckBox);
    li.appendChild(span);
    li.appendChild(input);
    li.appendChild(editButton);
    li.appendChild(saveButton);
    li.appendChild(deleteButton);
    li.appendChild(taskDate);
    li.appendChild(prioritySelect);

    taskInput.before(li);

    taskInput.classList.add("hide");
    project.querySelector("[data-action='add-task']").classList.add("hide"); 
}

export function deleteTask(projectId, taskId) {
    const project = document.querySelector(`[data-project-id="${projectId}"]`);
    const task = project.querySelector(`[data-task-id="${taskId}"]`);

    task.remove();
}

export function editTask(projectId, taskId) {
    const project = document.querySelector(`[data-project-id="${projectId}"]`);    
    const task = project.querySelector(`[data-task-id="${taskId}"]`);

    task.querySelector("[data-role='task-editinput']").value = task.querySelector("span").textContent;
    task.querySelector("span").classList.add("hide");
    task.querySelector("[data-role='task-editinput']").classList.remove("hide");
    task.querySelector("[data-action='save-task']").classList.remove("hide");
    task.querySelector("[data-action='edit-task']").classList.add("hide");
}

export function saveTask(projectId, taskId, newDesc) {
    const project = document.querySelector(`[data-project-id="${projectId}"]`);    
    const task = project.querySelector(`[data-task-id="${taskId}"]`);

    task.querySelector("span").textContent = newDesc;    
    task.querySelector("span").classList.remove("hide");
    task.querySelector("[data-role='task-editinput']").classList.add("hide");
    task.querySelector("[data-action='save-task']").classList.add("hide");
    task.querySelector("[data-action='edit-task']").classList.remove("hide"); 
}

export function toggleTask(projectId, taskId) {
    const project = document.querySelector(`[data-project-id="${projectId}"]`);    
    const task = project.querySelector(`[data-task-id="${taskId}"]`);

    task.querySelector("span").classList.toggle("completed");
}