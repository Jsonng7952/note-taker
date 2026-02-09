export function bindProjectEvents({ 
    onCreate, onDelete, onEdit, onSave, 
    onNewTask, onAddTask, 
    onDeleteTask, onEditTask, onSaveTask,
    onToggleTask, onTaskDueDateChange, onTaskPriorityChange }) {
    
    const userInput = document.getElementById("userinput");
    const enterButton = document.getElementById("enter");
    const projectList = document.getElementById("project-list");

    function handleCreate() {
        if (!userInput.value) return;

        onCreate(userInput.value);
        userInput.value = "";
    }

    function handleDelete(projectId) {
        onDelete(projectId);
    }

    function handleEdit(projectId) {
        onEdit(projectId);
    }

    function handleSave(projectId, newName) {
        onSave(projectId, newName);
    }

    function handleNewTask(projectId) {
        onNewTask(projectId);
    }

    function handleAddTask(projectId) {
        const projectItem = document.querySelector(`[data-project-id="${projectId}"]`); 
        const taskInput = projectItem.querySelector("[data-role='task-input']");

        if(!taskInput.value) return;

        onAddTask(projectId, taskInput.value);
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

    function toggleTask(projectId, taskId, checked) {
        onToggleTask(projectId, taskId, checked);
    }

    function handleTaskDueDateChange(projectId, taskId, newDate) {
        onTaskDueDateChange(projectId, taskId, newDate);
    }

    function handleTaskPriorityChange(projectId, taskId, newPriority) {
        onTaskPriorityChange(projectId, taskId, newPriority);
    }

    userInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            handleCreate();
        }
    });

    enterButton.addEventListener("click", handleCreate);
    
    projectList.addEventListener("click", (e) => {
        const action = e.target.dataset.action;
        if (!action) return;

        const project = e.target.closest("[data-project-id]");
        const projectId = project?.dataset.projectId;
        const task = e.target.closest("[data-task-id]");
        const taskId = task?.dataset.taskId;

        const projectInput = project?.querySelector("input")?.value;
        const taskInput = task?.querySelector("[data-role='task-editinput']")?.value;
        
        const handler = actionMap[action];
        if (handler) handler({projectId, taskId, projectInput, taskInput});
    });

    const actionMap = {
        // ----- Project actions -----
        "delete": ({projectId}) => handleDelete(projectId),
        "edit": ({projectId}) => handleEdit(projectId),
        "save": ({projectId, projectInput}) => handleSave(projectId, projectInput),
        "new-task": ({projectId}) => handleNewTask(projectId),
        "add-task": ({projectId}) => handleAddTask(projectId),

        // ----- Task actions -----
        "delete-task": ({projectId, taskId}) => handleDeleteTask(projectId, taskId),
        "edit-task": ({projectId, taskId}) => handleEditTask(projectId, taskId),
        "save-task": ({projectId, taskId, taskInput}) => handleSaveTask(projectId, taskId, taskInput)
    };
    
    projectList.addEventListener("change", (e) => {
        const project = e.target.closest("[data-project-id]");
        const projectId = project?.dataset.projectId;
        const task = e.target.closest("[data-task-id]");
        const taskId = task?.dataset.taskId;

        if (e.target.matches("[data-role='task-complete']")) {
            toggleTask(
                projectId,
                taskId,
                e.target.checked
            );
        }
        if (e.target.matches("[data-role='task-date']")) {
            handleTaskDueDateChange(
                projectId, 
                taskId, 
                e.target.value
            );
        }
        if (e.target.matches("[data-role='task-priority']")) {
            handleTaskPriorityChange(
                projectId, 
                taskId, 
                e.target.value
            );
        }
    });
}