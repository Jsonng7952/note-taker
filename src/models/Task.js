export default class Task {
    constructor(description) {
        this.description = description;
    }

    setDescription(description) {
        this.description = description;
    }

    getDescription() {
        return this.description;
    }    
}