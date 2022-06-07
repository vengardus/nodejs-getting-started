import {TOUser} from './to/touser.js'
import {Table} from '../database/table.js'


export class User extends Table {
    constructor() {
        super(TOUser)
        this.aTO = []
        this.singular = 'Usuario'
        this.plural = 'Usuarios'
    }

    _setValuesInsert(values) {
        values = {
            email: values.email,
            password: values.password,
            name: values.name
        }
        return values
    }

    _setValuesUpdate(values, oTO) {
        // OJO: update fields 
        oTO.name = values.name
        oTO.email = values.email
        oTO.password = values.password
        // 
        return oTO
    }

    async getAll() {
        this.aTO = await super.getAll()
    }

    async insert(values) {
        values = this._setValuesInsert(values)
        // if it must validate then define find_values else find_values = null
        const find_values = { email: values.email }
        
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


    /**
     * Custom Methods 
     */

    async validate_email_password(email, password) {
        const oTO = await this.findOne({email: email})
        if ( oTO === null ||  oTO.password !== password )
            return null
        return oTO
    }
}

