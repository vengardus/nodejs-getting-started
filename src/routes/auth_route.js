import {Router} from 'express'
import { signIn, authBySession, profile } from '../controllers/auth_controller.js'

const router = Router()

router.get('/ed', (req, res) => {
    res.send("hello")
    console.log("hello")
})
router.post('/login',signIn)
router.post('/authbysession',authBySession)
router.get('/profile', profile)

export default router