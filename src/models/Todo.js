export default class Todo {
    constructor(title, description) {
        this.title = title;
        this.description = description;
    }

    setTitle(title) {
        this.title = title;
    }

    getTitle() {
        return this.title;
    }

    
}