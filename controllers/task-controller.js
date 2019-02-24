import { taskService as service } from '../services/task-service'

class TaskController {

    async getAllTasks({ filter }) {
        if (filter) {
            return await service.getAllTasksBySearch(filter);
        }
        return await service.getAllTasks();
    }

    async addTask(request, response) { // TODO rebuild!
        const filename = request.file ? request.file.filename : '';
        const savedTask = await service.addTask(request.body, filename);
        response.send(savedTask);
    }

    async deleteTasks({ identifiers }) {
        await service.deleteTasks(identifiers);
    }
}

const taskController = new TaskController();

export { taskController }
