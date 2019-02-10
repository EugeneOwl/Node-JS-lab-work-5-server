import {taskService as service} from '../services/task-service'

class TaskController {

    async showAllTasks(request, response) {
        const tasks = await service.getAllTasks();
        return response.send(tasks);
    }

    async searchTasks(request, response) {
        const tasks = await service.getAllTasksBySearch(request.query['search']);
        return response.send(tasks);
    }

    async addTask(request, response) {
        const filename = request.file ? request.file.filename : '';
        const savedTask = await service.addTask(request.body, filename);
        response.send(savedTask);
    }
}

const taskController = new TaskController();

export {taskController}
