import { Auth } from "../models/auth.js"
import { Session } from "../models/session.js"
import { User } from "../models/user.js"

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

export const profile = async (req,res)=> {
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