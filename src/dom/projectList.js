export function addProject(project) {
    const projectList = document.getElementById("project-list");
    const li = document.createElement("li");
    
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

    li.appendChild(span);
    li.appendChild(input);
    li.appendChild(editButton);
    li.appendChild(deleteButton);
    li.appendChild(saveButton);

    li.dataset.projectId = project.getId();

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