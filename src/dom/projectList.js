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
    const taskInput = projectItem.querySelector("ul").querySelector("input");

    taskInput.classList.remove("hide");
    projectItem.querySelector("[data-action='add-task']").classList.remove("hide"); 
}

export function addTaskToProject(id, description) {
    const projectItem = document.querySelector(`[data-project-id="${id}"]`); 
    const taskInput = projectItem.querySelector("ul").querySelector("input");

    const li = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = description;

    li.appendChild(span);
    taskInput.before(li);

    taskInput.classList.add("hide");
    projectItem.querySelector("[data-action='add-task']").classList.add("hide"); 
}