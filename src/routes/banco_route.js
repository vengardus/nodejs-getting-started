import {Router} from 'express'
import { getAllBanco } from '../controllers/banco_controller.js'

const router = Router()

router.get('/banco', getAllBanco)
router.get('/', getAllBanco)

router.get('/banco_list', (req, res) => {
    res.render('banco_list', {'name':'vengardus'})
})

/*
router.post('/task',createTask)
router.put('/task/:id', updateTask)
router.delete('/task/:id', deleteTask)
router.get('/task/:id', getTask)
*/
export default router