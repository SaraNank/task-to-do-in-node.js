import { express } from "express";

const taskRouter=express.router();

taskRouter.get('/',taskController.getAll);

taskRouter.get('/',taskController.getByStatus);

taskRouter.get('/:id',taskController.getById);

taskRouter.put('/:id',taskController.updateById);

taskRouter.post('/',taskController.addTask);

taskRouter.delete('/:id',taskController.deleteTask);

export default taskRouter;