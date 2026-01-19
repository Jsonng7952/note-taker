export default class Project {
    constructor(name) {
        this.name = name;
        this.id = crypto.randomUUID();
        this.tasks = [];
    }

    setName(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    addTask(task) {
        this.tasks.push(task);
    }
}