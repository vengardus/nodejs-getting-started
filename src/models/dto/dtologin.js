import { Type} from '@sinclair/typebox'
import Ajv from 'ajv'


export class DTOLogin {
    login_schema = Type.Object(
        {
            email: Type.String(),
            password: Type.String(),
        },
        {
            additionalProperties: false
        }
    )
    
    constructor() {
        this.message = ''
        this.dto = {}
        this.ajv = new Ajv().addKeyword('kind').addKeyword('modifier')
    }
    
    validate(values) {
        const validate = this.ajv.compile(this.login_schema)
        const is_valid = validate(values)
        if ( !is_valid )
            this.message = 'Error en el body de la solicitud'
        else
            this.dto = values
        return is_valid
    }
}