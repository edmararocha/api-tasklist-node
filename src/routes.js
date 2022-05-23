import { Router } from 'express';
import taskController  from './controllers/TaskController.js';
import userController from './controllers/UserController.js';

const router = Router();

router.get('/', (req, res) => {
    res.json({
        "statusCode": 200
    });
});

// Task
router.post('/task', taskController.createTask);
router.get('/tasks', taskController.getTasks);
router.get('/task', taskController.getTask);
router.put('/task', taskController.updateTask);
router.delete('/task', taskController.deleteTask);

// User
router.post('/user', userController.createUser);
router.get('/users', userController.getUsers);
router.get('/user', userController.getUser);
router.put('/user', userController.updateUser);
router.delete('/user', userController.deleteUser);
router.post('/user/login', userController.login);

export default router;