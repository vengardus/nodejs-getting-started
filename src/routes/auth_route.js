import {Router} from 'express'
import { signIn } from '../controllers/auth_controller.js'

const router = Router()

router.post('/login',signIn)

export default router