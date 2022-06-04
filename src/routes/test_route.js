import {Router} from 'express'
import {importData} from '../controllers/test_controller.js'

const router = Router()

router.get('/test/importdata', importData)

export default router