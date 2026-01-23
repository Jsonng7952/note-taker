export function bindProjectEvents({ onCreate, onDelete, onEdit, onSave, onNewTask, onAddTask, onDeleteTask, onEditTask, onSaveTask }) {
    
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
        const taskInput = projectItem.querySelector("[data-action='input-task']");

        if(!taskInput.value) return;

        onAddTask(id, taskInput.value);
        taskInput.value = "";
    }

    function handleDeleteTask(projectId, taskId) {
        onDeleteTask(projectId, taskId);
    }

    function handleEditTask(projectId, taskId) {
        onEditTask(projectId, taskId);
    }

    function handleSaveTask(projectId, taskId, newDesc) {
        onSaveTask(projectId, taskId, newDesc);
    }

    userInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            handleCreate();
        }
    });

    enterButton.addEventListener("click", handleCreate);
    
    projectList.addEventListener("click", (e) => {

        const project = e.target.closest("[data-project-id]");
        const projectId = project?.dataset.projectId;
        const task = e.target.closest("[data-task-id]");
        const taskId = task?.dataset.taskId;

        const projectInput = project?.querySelector("input")?.value;
        const taskInput = task?.querySelector("input")?.value;
        
        if(e.target.matches(("[data-action='delete']"))) {
            handleDelete(projectId);
        }
        if (e.target.matches(("[data-action='edit']"))) {                 
            handleEdit(projectId);
        }
        if(e.target.matches(("[data-action='save']"))) {
            handleSave(projectId, projectInput);
        }
        if(e.target.matches(("[data-action='new-task']"))) {
            handleNewTask(projectId);
        }        
        if(e.target.matches(("[data-action='add-task']"))) {
            handleAddTask(projectId);
        }        
        if(e.target.matches(("[data-action='delete-task']"))) {
            handleDeleteTask(projectId, taskId);
        }
        if (e.target.matches(("[data-action='edit-task']"))) {                 
            handleEditTask(projectId, taskId);
        }
        if(e.target.matches(("[data-action='save-task']"))) {
            handleSaveTask(projectId, taskId, taskInput);
        }        
    });
}