import { Auth } from "../models/auth.js"
import { Session } from "../models/session.js"
import { User } from "../models/user.js"
import { DTOLogin } from '../models/dto/dtologin.js'

import Ajv from 'ajv'
import { Type} from '@sinclair/typebox'

export const signIn = async (req, res) => {
    const { email, password } = req.body
    if ( !email || !password )
        return res.status(400).json({message:'Error en solicitud'})
        
    const oAuth = new Auth()
    const oTOUser = await oAuth.signIn(email, password)
    if ( oTOUser === null  )
        return res.status(oAuth.error).json({message:oAuth.message})
    res.json({message:`Usuario ${oTOUser.name} autorizado.`})
}

export const authBySession = async (req, res) => {
    const { email, password } = req.body
    if ( !email || !password )
        return res.status(400).json({message:'Error en solicitud'})
        
    const oAuth = new Auth()
    const oTOUser = await oAuth.authBySession(email, password)
    if ( oTOUser === null  )
        return res.status(oAuth.error).json({message:oAuth.message})
    
    res.cookie('session_id', oAuth.session_id, {
        httpOnly: true  // coockie wont be accessible from js
    })
    res.json({message:`Usuario ${oTOUser.name} autorizado.`})
}

export const authByToken = async(req, res) => {
    const oDTOLogin = new DTOLogin()
    if ( ! oDTOLogin.validate(req.body) )
        return res.status(400).json({message:oDTOLogin.message})
    const {email, password} = oDTOLogin.dto
    //

    const oAuth = new Auth()
    const oTOUser = await oAuth.authByToken(email, password)
    if ( oTOUser === null  )
        return res.status(oAuth.error).json({message:oAuth.message})

    return res.json({ jwt:oAuth.jwt, user: oTOUser })
      
}

export const profilebysession = async (req,res)=> {
    const { cookies } = req 
    if ( !cookies.session_id ) return res.sendStatus(401)

    const oSession = new Session() 
    const oTOSession = await oSession.findOne({session_id:cookies.session_id})
    if ( oTOSession === null ) return res.sendStatus(401)
    
    const oUser = new User() 
    const oTOUser = await oUser.getById(oTOSession.user_id)
    if ( oTOUser === null ) return res.sendStatus(401)

    return res.json({name:oTOUser.name})
}

export const profilebytoken = async (req, res) => {
    const {authorization} = req.headers
    if ( !authorization ) return res.status(401).json({message:'Error en solicitud'})

    const oAuth = new Auth()
    const oTOUser = await oAuth.verifyToken(authorization)
    if ( oTOUser === null ) return res.status(401).json({message:'No autorizado'})

    return res.json({name:oTOUser.name})
}