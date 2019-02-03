import express from 'express'
import {taskController} from '../controllers/task-controller'

const taskRouter = express.Router();

taskRouter.get('/tasks', taskController.showAllTasks);
taskRouter.post('/tasks', taskController.addTask);

export {taskRouter}