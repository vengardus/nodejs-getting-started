export class Table {
    constructor(model) {
        this.model = model
        this.error = 200
        this.message = ''
        this.singular = ''
        this.plural = ''
    }

    /***
     * @param {*} find_values dictionary. example: { cod: '001' }
     * @Returns oTO or null if not found
     */
     async findOne(find_values) {
        const oTO = await this.model.findOne({ where: find_values })
        if ( oTO === null ) {
            this.error = 404
            this.message = `${this.singular} no encontrado`
        }
        return oTO
    }

    async findByPk(id) {
        const oTO = await this.model.findByPk(id)
        if ( oTO === null ) {
            this.error = 404
            this.message = `${this.singular} no encontrado`
        }
        return oTO
    }

    /***
     * Return array of objects or null if a error has ocurred
    */
    async getAll() {
        try {
            const aTO = await this.model.findAll({
                order: [
                    ['id']
                ],
                //attributes: ['desc']
            })
            return aTO
        } catch (error) {
            this.error = 500
            this.message = error.message
            return null
        }
    }

    /***
     * values: dictionary (object)
     *  for example: { cod: '01', desc:'description' }
     * find_values: dictionary (object) if exist pre-insert validation
     *  example: { cod: '001' }
     * Return: 
     *  object inserted or null if an error has ocurred 
     */
    async insert(values, find_values=null) {
        try {
            if ( find_values !== null ) {
                const oTO = await this.model.findOne({ where: find_values })
                if ( oTO !== null) {
                    this.error = 409
                    this.message = `${this.singular} ya existe.`
                    return null
                }
            }
            const oTO_new = await this.model.create(values)
            this.error = 201    // status code : 201
            this.message = `${this.singular} insertado satisfactoriamente.`
            return oTO_new 

        } catch (error) {
            this.error = 500
            this.message = error.message
            return null
        }
    }

    /***
     * Delete row with id = id
     * Return
     *  true or false and this.error (status code)
     */
    async deleteOne(id) {
        try {
            const oTO = await this.model.findByPk(id)
            if ( oTO === null) {
                this.error = 404
                this.message = `${this.singular} no encontrado.`
                return false
            }
    
            await this.model.destroy({ where: { id: id } })
            this.error = 204    // status code: 204
            return true
        } catch (error) {
            return res.status(500).json({message:error.message})
        }
    }

    async update(oTO) {
        try {
            await oTO.save()
            return oTO
        } catch (error) {
            this.error = 500
            this.message = error.message
            return null
        }
    }

    async getById(id) {
        return await this.findByPk(id)
    }
}
