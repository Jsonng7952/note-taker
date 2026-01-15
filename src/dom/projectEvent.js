export function bindProjectEvents({ onCreate, onDelete, onEdit, onSave }) {
    
    const userInput = document.getElementById("userinput");
    const enterButton = document.getElementById("enter");
    const projectList = document.getElementById("project-list");

    function handleCreate() {
        if (!userInput.value) return;

        onCreate(userInput.value);
        userInput.value = "";
    }

    function handleDelete(id) {
        onDelete(id);
    }

    function handleEdit(id) {
        onEdit(id);
    }

    function handleSave(id, newName) {
        onSave(id, newName);
    }

    userInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            handleCreate();
        }
    });

    enterButton.addEventListener("click", handleCreate);
    
    projectList.addEventListener("click", (e) => {
        if(e.target.matches(("[data-action='delete']"))) {
            handleDelete(e.target.parentNode.dataset.projectId);
        }
        if (e.target.matches(("[data-action='edit']"))) {                 
            handleEdit(e.target.parentNode.dataset.projectId);
        }
        if(e.target.matches(("[data-action='save']"))) {
            handleSave(e.target.parentNode.dataset.projectId, e.target.parentNode.querySelector("input").value);
        }
    });
}