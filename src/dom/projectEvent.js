let userInput = document.getElementById("userinput");
let enterButton = document.getElementById("enter");

export function bindProjectEvents({ onCreate }) {
    function handleCreate() {
        if (!userInput.value) return;

        onCreate(userInput.value);
        userInput.value = "";
    }

    userInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            handleCreate();
        }
    });

    enterButton.addEventListener("click", handleCreate);

    
}