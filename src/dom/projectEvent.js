export function bindProjectEvents({ onCreate, onDelete, onEdit, onSave, onNewTask, onAddTask }) {
    
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

    function handleNewTask(id) {
        onNewTask(id);
    }

    function handleAddTask(id) {
        const projectItem = document.querySelector(`[data-project-id="${id}"]`); 
        const taskInput = projectItem.querySelector("ul").querySelector("input");

        if(!taskInput.value) return;

        onAddTask(id, taskInput.value);
        taskInput.value = "";
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
        if(e.target.matches(("[data-action='new-task']"))) {
            handleNewTask(e.target.parentNode.dataset.projectId);
        }        
        if(e.target.matches(("[data-action='add-task']"))) {
            handleAddTask(e.target.parentNode.parentNode.dataset.projectId);
        }        
    });
}