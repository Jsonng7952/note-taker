export default class Todo {
    constructor(description) {
        this.description = description;
    }

    setDescription(description) {
        this.title = description;
    }

    getDescription() {
        return this.description;
    }    
}