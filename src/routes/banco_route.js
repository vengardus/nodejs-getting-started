import {Router} from 'express'
import { getAllBanco } from '../controllers/banco_controller.js'

const router = Router()

router.get('/banco', getAllBanco)
/*
router.post('/task',createTask)
router.put('/task/:id', updateTask)
router.delete('/task/:id', deleteTask)
router.get('/task/:id', getTask)
*/
export default router