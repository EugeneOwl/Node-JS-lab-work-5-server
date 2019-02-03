import {taskRepository as repository} from '../repositories/task-repository'
import {Task} from "../models/task";

class TaskService {

    async getAllTasks() {
        return await repository.getAllTasks();
    }

    async addTask(taskToCreate) {
        const taskToSave = new Task({
            name: taskToCreate.name,
            status: taskToCreate.status
        });
        return await repository.addTask(taskToSave);
    }
}

const taskService = new TaskService();

export {taskService}