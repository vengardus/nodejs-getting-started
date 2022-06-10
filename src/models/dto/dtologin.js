import { Type} from '@sinclair/typebox'
import addFormats from 'ajv-formats'
import addErrors from 'ajv-errors'
import Ajv from 'ajv'


export class DTOLogin {
    login_schema = Type.Object(
        {
            email: Type.String({
                format: 'email',
                errorMessage: {
                    type: 'Tipo email debe ser un string.',
                    format: 'email debe ser un correo electronico valido.'
                }
            }),
            password: Type.String({
                errorMessage: {
                    type: 'Tipo password debe ser un string'
                }
            }),
        },
        {
            additionalProperties: false,
            errorMessage: 'El formato del objeto no es valido.'
        }
    )
    
    constructor() {
        this.message = ''
        this.dto = {}
        this.ajv = new Ajv({ allErrors:true })
        addFormats(this.ajv, ['email']).addKeyword('kind').addKeyword('modifier')
        addErrors(this.ajv)

    }
    
    validate(values) {
        const validate = this.ajv.compile(this.login_schema)
        const is_valid = validate(values)
        if ( !is_valid )
            this.message = this.ajv.errorsText(validate.errors, { separator:'\n'})
        else
            this.dto = values
        return is_valid
    }
}