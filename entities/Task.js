

class Task {
    name;
    status;
    completionDate;

    constructor(name, status, completionDate) {
        this.name = name;
        this.status = status;
        this.completionDate = completionDate;
    }

    static sayGoodByeMaggets() {
        console.log('Good bye!');
        return 3;
    }
}

Task.a = '';

const task = new Task('eugene.js');

const a = Task.sayGoodByeMaggets();
console.log(a);
console.log(task.name);