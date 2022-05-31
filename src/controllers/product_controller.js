import {Product} from '../models/product.js'

export const getAllProduct = async (req, res) => {
    try {
        const aTO = await Product.findAll({
            order: [
                ['id']
            ],
            //attributes: ['desc']
        })
        res.json(aTO)
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}

export const createProduct = async(req, res) => {
    try {
        const {cod, desc} = req.body

        const oTO = await Product.findOne(
            { where: {
                cod: cod
            }}
        )
        if ( oTO !== null)
            return res.status(404).json({message:"Producto ya existe"})


        const newProduct = await Product.create({
            cod,
            desc
        })
        res.json(newProduct)    
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}