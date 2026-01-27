export default class Task {
    constructor(description) {
        this.description = description;
        this.id = crypto.randomUUID();
        this.completed = false;
        this.priority = "none";
        this.dueDate = new Date().toISOString().slice(0, 10);
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

    getDate() {
        return this.dueDate
    }

    setDate(newDate) {
        this.dueDate = newDate;
    }
}