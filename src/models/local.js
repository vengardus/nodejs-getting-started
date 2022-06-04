import {TOLocal} from './to/tolocal.js'
import {Table} from '../database/table.js'


export class Local extends Table {
    constructor() {
        super(TOLocal)
        this.aTO = []
        this.singular = 'Local'
        this.plural = 'Locales'
    }

    async getAll() {
        this.aTO = await super.getAll()
    }

    async insert(values, find_values) {
        return await super.insert(values, find_values)
    }

    async deleteOne(id) {
        return super.deleteOne(id)
    }

    async update(id, values) {
        let oTO = await this.findByPk(id)
        if ( oTO === null ) 
            return null

        // OJO: update fields 
        oTO.cod = values.cod
        oTO.desc = values.desc
        // 

        const oTO_new = await super.update(oTO)
        if ( oTO_new === null )
            return null
    
        return oTO_new
    }

    async getById(id) {
        return super.getById(id)
    }
}

