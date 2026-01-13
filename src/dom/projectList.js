export function addProject(project) {
    const projectList = document.getElementById("project-list");
    const li = document.createElement("li");
    li.textContent = project.getName();
    
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    li.appendChild(editButton);
    li.appendChild(deleteButton);

    li.dataset.projectId = project.getId();

    projectList.appendChild(li);
}

export function deleteProject(id) {
    const projectItem = document.querySelector(`[data-project-id="${id}"]`);
    projectItem.remove();
}