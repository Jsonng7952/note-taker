export function bindProjectEvents({ onCreate, onDelete }) {
    
    const userInput = document.getElementById("userinput");
    const enterButton = document.getElementById("enter");
    const projectList = document.getElementById("project-list");

    function handleCreate() {
        if (!userInput.value) return;

        onCreate(userInput.value);
        userInput.value = "";
    }

    function handleDelete(Id) {
        onDelete(Id);
    }

    userInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            handleCreate();
        }
    });

    enterButton.addEventListener("click", handleCreate);

    projectList.addEventListener("click", (e) => {
        if(e.target.textContent === "Delete"){
            handleDelete(e.target.parentNode.dataset.projectId);
        }
    });
}