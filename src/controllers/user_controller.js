import {User} from '../models/user.js'

export const getAll = async (req, res) => {
    const oUser = new User()
    await oUser.getAll()
    if ( oUser.aTO === null )
        return res.status(oUser.error).json({message:oUser.message})

    res.json(oUser.aTO)   
}

export const insert = async(req, res) => {
    const oUser = new User()
    const values = req.body

    const oTO = await oUser.insert(values)
    if ( oTO === null)
        return res.status(oUser.error).json({message:oUser.message})

    res.json(oTO)    
}

export const deleteOne = async (req, res) => {
    const { id } = req.params
    const oUser = new User()
    if ( ! await oUser.deleteOne(id) )
        return res.status(oUser.error).json({message:oUser.message})

    res.sendStatus(oUser.error)
}

export const update = async(req, res) => {
    const { id } = req.params
    const values = req.body
    const oUser = new User()
    const oTO = await oUser.update(id, values)
    if ( oTO === null ) 
        return res.status(oUser.error).json({message:oUser.message})
        
    res.json(oTO)
}

export const getById = async(req, res) => {
    const { id } = req.params
    const oUser = new User()
    const oTO = await oUser.getById(id)
    if ( oTO  === null )
        return res.status(oUser.error).json({message:oUser.message})
        
    res.json(oTO)
}




