import {Oficina} from '../models/oficina.js'

export const getAll = async (req, res) => {
    try {
        const aTO = await Oficina.findAll({
            order: [
                ['id']
            ],
            //attributes: ['desc']
        })
        console.log(aTO)
        res.json(aTO)
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}

export const create = async(req, res) => {
    try {
        const {cod, desc} = req.body

        const oTO = await Oficina.findOne(
            { where: {
                cod: cod
            }}
        )
        if ( oTO !== null)
            return res.status(404).json({message:"Oficinao ya existe"})


        const newOficina = await Oficina.create({
            cod,
            desc
        })
        res.json(newOficina)    
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}