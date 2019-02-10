import {taskRepository as repository} from '../repositories/task-repository'
import {Task} from "../models/task";
import {getCurrentDate, getCurrentTime} from "./date-time-service";

class TaskService {

    async getAllTasks() {
        return await repository.getAllTasks();
    }

    async getAllTasksBySearch(search) {
        return await repository.getAllTasksBySearch(search);
    }

    async addTask(taskToCreate, filename) {

        const taskToSave = new Task({
            name: taskToCreate.name,
            status: taskToCreate.status,
            date_created: getCurrentDate(),
            time_created: getCurrentTime(),
            file: filename
        });
        return await repository.addTask(taskToSave);
    }
}

const taskService = new TaskService();

export {taskService}
