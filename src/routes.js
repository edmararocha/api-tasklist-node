import { Router } from 'express';
import { deleteTask, insertTask, selectAllTasks, selectTask, updateTask } from './controller/task';

const router = Router();

router.get('/', (req, res) => {
    res.json({
        "statusCode": 200
    });
});

router.post('/task', insertTask);
router.put('/task', updateTask);
router.get('/tasks', selectAllTasks);
router.get('/task', selectTask);
router.delete('/task', deleteTask);

export default router;