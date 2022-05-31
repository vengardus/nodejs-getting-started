import {Product} from '../models/product'

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