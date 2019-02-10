import express from 'express'
import {taskController} from '../controllers/task-controller'
import {AUTH_LOGIN_URL, TASKS_BASE_URL, TASKS_SEARCH_URL} from "./routes";
import {uploadFile} from '../services/multer-upload-file-service'
import {authController} from "../controllers/auth-controller";

const baseRouter = express.Router();

// Auth
baseRouter.post(AUTH_LOGIN_URL, authController.login);

// Tasks
baseRouter.get(TASKS_BASE_URL, taskController.showAllTasks);
baseRouter.post(TASKS_BASE_URL, uploadFile.single('file'), taskController.addTask);
baseRouter.get(TASKS_SEARCH_URL, taskController.searchTasks);

export {baseRouter}
