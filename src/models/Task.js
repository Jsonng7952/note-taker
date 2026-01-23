export default class Task {
    constructor(description) {
        this.description = description;
        this.id = crypto.randomUUID();
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
}