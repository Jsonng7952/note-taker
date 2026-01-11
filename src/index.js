import Project from "./models/project.js";

let p1 = new Project("project 1");
let userInput = document.getElementById("userinput");
let enterButton = document.getElementById("enter");



userInput.addEventListener("keypress", (e) => {
	if (userInput.value.length > 0 && e.keyCode === 13) {
        console.log("test");
	}
})

enterButton.addEventListener("click", (e) => {
    console.log(e);
})

