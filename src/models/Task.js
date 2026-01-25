export default class Task {
    constructor(description) {
        this.description = description;
        this.id = crypto.randomUUID();
        this.completed = false;
        this.priority = "medium";
        this.dueDate = "";
    }

    setDescription(description) {
        this.description = description;
    }

    getDescription() {
        return this.description;
    }    
   
    getId() {
        return this.id;
    }    

    getCompleted() {
        return this.completed;
    }

    setCompleted(completed) {
        this.completed = completed;
    }
}