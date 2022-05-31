import {Banco} from '../models/banco.js'

export const getAllBanco = async (req, res) => {
    try {
        const aBanco = await Banco.findAll({
            order: [
                ['id']
            ],
            //attributes: ['desc']
        })
        console.log(aBanco)
        res.json(aBanco)
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}