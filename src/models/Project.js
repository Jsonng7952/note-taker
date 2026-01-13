export default class Project {
    constructor(name) {
        this.id = crypto.randomUUID();
        this.name = name;
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
}