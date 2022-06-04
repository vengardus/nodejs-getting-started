import {Router} from 'express'
import { getAll, insert, deleteOne, update, getById } from '../controllers/local_controller.js'

const router = Router()

router.get('/api/local', getAll)
router.post('/api/local',insert)
router.delete('/api/local/:id', deleteOne)
router.put('/api/local/:id', update)
router.get('/api/local/:id', getById)

/*
router.post('/task',createTask)
router.put('/task/:id', updateTask)
router.delete('/task/:id', deleteTask)
router.get('/task/:id', getTask)
*/
export default router