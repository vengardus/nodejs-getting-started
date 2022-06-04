import {Router} from 'express'
import { getAll, create } from '../controllers/oficina_controller.js'

const router = Router()

router.get('/api/oficina', getAll)
router.post('/api/oficina',create)


/*
router.post('/task',createTask)
router.put('/task/:id', updateTask)
router.delete('/task/:id', deleteTask)
router.get('/task/:id', getTask)
*/
export default router