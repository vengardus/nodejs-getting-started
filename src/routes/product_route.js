import {Router} from 'express'
import { getAllProduct, createProduct } from '../controllers/product_controller.js'

const router = Router()

router.get('/api/product', getAllProduct)
router.post('/api/product',createProduct)

router.get('/product_list', (req, res) => {
    res.render('banco_list', {'name':'vengardus'})
})

/*
router.post('/task',createTask)
router.put('/task/:id', updateTask)
router.delete('/task/:id', deleteTask)
router.get('/task/:id', getTask)
*/
export default router