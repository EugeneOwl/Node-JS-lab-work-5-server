import {taskService as service} from '../services/task-service'

class TaskController {

    async showAllTasks(request, response) {
        const tasks = await service.getAllTasks();
        return response.render('index', {
            tasks: tasks
        });
    }

    async addTask(request, response) {
        const savedTask = await service.addTask(request.body);
        response.send(savedTask);
    }
}

const taskController = new TaskController();

export {taskController}