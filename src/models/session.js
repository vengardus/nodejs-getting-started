import {TOSession} from './to/tosession.js'
import {Table} from '../database/table.js'


export class Session extends Table {
    constructor() {
        super(TOSession)
        this.aTO = []
        this.singular = 'Sesion'
        this.plural = 'Sesiones'
    }

    _setValuesInsert(values) {
        values = {
            user_id: values.user_id,
            session_id: values.session_id,
        }
        return values
    }

    _setValuesUpdate(values, oTO) {
        // OJO: update fields 
        oTO.user_id = values.user_id
        oTO.session_id = values.session_id
        // 
        return oTO
    }

    async getAll() {
        this.aTO = await super.getAll()
    }

    /**
     * 
     * @param {values}  dictionary
     * @returns object inserted or null
     */
    async insert(values) {
        values = this._setValuesInsert(values)
        // if it must validate then define find_values else find_values = null
        const find_values = { session_id: values.session_id }
        
        return await super.insert(values, find_values)
    }

    async deleteOne(id) {
        return super.deleteOne(id)
    }

    async update(id, values) {
        let oTO = await this.findByPk(id)
        if ( oTO === null ) 
            return null

        oTO = this._setValuesUpdate(values, oTO)

        const oTO_new = await super.update(oTO)
        if ( oTO_new === null )
            return null
    
        return oTO_new
    }

    async getById(id) {
        return super.getById(id)
    }


}

