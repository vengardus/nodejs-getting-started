import {Local} from '../models/local.js'

export const getAll = async (req, res) => {
    console.log('LOCAL.GETALL')
    const oLocal = new Local()
    await oLocal.getAll()
    if ( oLocal.aTO === null )
        return res.status(oLocal.error).json({message:oLocal.message})

    res.json(oLocal.aTO)   
}

export const insert = async(req, res) => {
    const oLocal = new Local()
    const {cod, desc} = req.body
    const values = {
        cod: cod,
        desc: desc
    }
    const find_values = {cod: cod}

    const oTO = await oLocal.insert(values, find_values)
    if ( oTO === null)
        return res.status(oLocal.error).json({message:oLocal.message})

    res.json(oTO)    
}

export const deleteOne = async (req, res) => {
    const { id } = req.params
    const oLocal = new Local()
    if ( ! await oLocal.deleteOne(id) )
        return res.status(oLocal.error).json({message:oLocal.message})

    res.sendStatus(oLocal.error)
}

export const update = async(req, res) => {
    const { id } = req.params
    const { cod, desc } = req.body
    // OJO values to update
    const values = {
        cod: cod,
        desc: desc
    }
    console.log(id, values)
    const oLocal = new Local()
    const oTO = await oLocal.update(id, values)
    if ( oTO === null ) 
        return res.status(oLocal.error).json({message:oLocal.message})
        
    res.json(oTO)
}

export const getById = async(req, res) => {
    const { id } = req.params
    const oLocal = new Local()
    const oTO = await oLocal.getById(id)
    if ( oTO  === null )
        return res.status(oLocal.error).json({message:oLocal.message})
        
    res.json(oTO)
}




