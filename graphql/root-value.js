import { taskController } from "../controllers/task-controller";
import { authController } from "../controllers/auth-controller";

const rootValue = {
    tasks: args =>  taskController.getAllTasks(args),
    delete: args => taskController.deleteTasks(args), // TODO test
    login: args => authController.login(args),
    isAuthorized: args => authController.isAuthorized(args)
};

export { rootValue }
