import express from 'express'
import {taskController} from '../controllers/task-controller'
import { AUTH_IS_AUTHORIZED_URL, AUTH_LOGIN_URL, AUTH_LOGOUT_URL, TASKS_BASE_URL, TASKS_SEARCH_URL } from "./routes";
import {uploadFile} from '../services/multer-upload-file-service'
import {authController} from "../controllers/auth-controller";
import {authMiddleware} from "../middlewares/auth-middlewar";

const baseRouter = express.Router();

// Auth
baseRouter.post(AUTH_LOGIN_URL, authController.login);
baseRouter.get(AUTH_IS_AUTHORIZED_URL, authController.isAuthorized);
baseRouter.get(AUTH_LOGOUT_URL, authController.logout);

// Tasks
baseRouter.get(TASKS_BASE_URL, authMiddleware.validateJwtTokenCookie, taskController.showAllTasks);
baseRouter.post(TASKS_BASE_URL, uploadFile.single('file'), authMiddleware.validateJwtTokenCookie, taskController.addTask);
baseRouter.get(TASKS_SEARCH_URL, authMiddleware.validateJwtTokenCookie, taskController.searchTasks);

export {baseRouter}
