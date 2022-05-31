import {Router} from 'express'
import { createTask, deleteTask, getAllTask, getTask, updateTask } from '../controllers/task_controller.js'

const router = Router()

router.get('/task', getAllTask)
router.post('/task',createTask)
router.put('/task/:id', updateTask)
router.delete('/task/:id', deleteTask)
router.get('/task/:id', getTask)

export default router