import {Router} from 'express'
import { getAll, insert, deleteOne, update, getById } from '../controllers/user_controller.js'

const router = Router()

router.get('/api/user', getAll)
router.post('/api/user',insert)
router.delete('/api/user/:id', deleteOne)
router.put('/api/user/:id', update)
router.get('/api/user/:id', getById)

export default router