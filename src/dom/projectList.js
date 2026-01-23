export function addProject(project) {
    const projectList = document.getElementById("project-list");
    const li = document.createElement("li");
    
    li.dataset.projectId = project.getId();

    const span = document.createElement("span");
    span.textContent = project.getName();

    const input = document.createElement("input");
    input.type = "text";
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
    newTaskButton.textContent = "+";
    newTaskButton.dataset.action = "new-task";

    const taskList = document.createElement("ul");
    const taskInput = document.createElement("input");
    taskInput.type = "text";
    taskInput.dataset.action = "input-task";
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

export function deleteProject(id) {
    const projectItem = document.querySelector(`[data-project-id="${id}"]`);

    projectItem.remove();
}

export function editProject(id) {
    const projectItem = document.querySelector(`[data-project-id="${id}"]`);    

    projectItem.querySelector("input").value = projectItem.querySelector("span").textContent;
    projectItem.querySelector("span").classList.add("hide");
    projectItem.querySelector("input").classList.remove("hide");
    projectItem.querySelector("[data-action='save']").classList.remove("hide");
    projectItem.querySelector("[data-action='edit']").classList.add("hide");
}

export function saveProject(id) {
    const projectItem = document.querySelector(`[data-project-id="${id}"]`); 
    const newName = projectItem.querySelector("input").value;

    projectItem.querySelector("span").textContent = newName;    
    projectItem.querySelector("span").classList.remove("hide");
    projectItem.querySelector("input").classList.add("hide");
    projectItem.querySelector("[data-action='save']").classList.add("hide");
    projectItem.querySelector("[data-action='edit']").classList.remove("hide"); 

}

export function showNewTask(id) {
    const projectItem = document.querySelector(`[data-project-id="${id}"]`); 
    const taskInput = projectItem.querySelector("[data-action='input-task']");

    taskInput.classList.remove("hide");
    projectItem.querySelector("[data-action='add-task']").classList.remove("hide"); 
}

export function addTaskToProject(id, description, task) {
    const projectItem = document.querySelector(`[data-project-id="${id}"]`); 
    const taskInput = projectItem.querySelector("[data-action='input-task']");

    const li = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = description;

    li.dataset.taskId = task.getId();

    const input = document.createElement("input");
    input.type = "text";
    input.dataset.action = "input-edittask";
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
    
    li.appendChild(span);
    li.appendChild(input);
    li.appendChild(editButton);
    li.appendChild(saveButton);
    li.appendChild(deleteButton);

    taskInput.before(li);

    taskInput.classList.add("hide");
    projectItem.querySelector("[data-action='add-task']").classList.add("hide"); 
}

export function deleteTask(projectId, taskId) {
    const project = document.querySelector(`[data-project-id="${projectId}"]`);
    const task = project.querySelector(`[data-task-id="${taskId}"]`);

    task.remove();
}

export function editTask(projectId, taskId) {
    const project = document.querySelector(`[data-project-id="${projectId}"]`);    
    const task = project.querySelector(`[data-task-id="${taskId}"]`);

    task.querySelector("input").value = task.querySelector("span").textContent;
    task.querySelector("span").classList.add("hide");
    task.querySelector("input").classList.remove("hide");
    task.querySelector("[data-action='save-task']").classList.remove("hide");
    task.querySelector("[data-action='edit-task']").classList.add("hide");
}

export function saveTask(projectId, taskId, newDesc) {
    const project = document.querySelector(`[data-project-id="${projectId}"]`);    
    const task = project.querySelector(`[data-task-id="${taskId}"]`);

    task.querySelector("span").textContent = newDesc;    
    task.querySelector("span").classList.remove("hide");
    task.querySelector("input").classList.add("hide");
    task.querySelector("[data-action='save-task']").classList.add("hide");
    task.querySelector("[data-action='edit-task']").classList.remove("hide"); 
}
