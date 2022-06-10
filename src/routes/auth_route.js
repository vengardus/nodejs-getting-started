import {Router} from 'express'
import { signIn, authBySession, profilebysession, 
        authByToken, profilebytoken } from '../controllers/auth_controller.js'

const router = Router()

router.get('/ed', (req, res) => {
    res.send("hello")
    console.log("hello")
})
router.post('/login',signIn)
router.post('/authbysession',authBySession)
router.post('/authbytoken',authByToken)
router.get('/profilebysession', profilebysession)
router.get('/profilebytoken', profilebytoken)

export default router