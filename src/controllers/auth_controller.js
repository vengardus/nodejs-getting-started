import { Auth } from "../models/auth.js"

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