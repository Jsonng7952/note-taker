export function renderProject(project) {
    const projectList = document.getElementById("projectlist");
    const li = document.createElement("li");
    li.textContent = project.getName();
    
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    li.appendChild(editButton);
    li.appendChild(deleteButton);

    projectList.appendChild(li);
}