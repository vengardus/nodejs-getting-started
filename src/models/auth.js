import { nanoid } from 'nanoid'
import {User} from '../models/user.js'
import {Session} from '../models/session.js'


export class Auth {
    constructor() {
        this.error = 0
        this.message = ''
        this.session_id = ''
    }

    async signIn(email, password) {
        const oUser = new User()
        const oTOUser = await oUser.validate_email_password(email, password)
        console.log('SIgIN', oTOUser)
        if ( oTOUser === null ) {
            this.error = 401
            this.message = 'Email o password incorrectos'
        }
        return oTOUser
    }

    async authBySession(email, password) {
        const oTOUser = await this.signIn(email, password)
        if ( oTOUser === null ) {
            this.error = 401
            this.message = 'Usuario no auorizado.'
        }
        else {
            this.session_id = nanoid()
            const oSession = new Session()
            const oTOSession = await oSession.insert({
                user_id: oTOUser.id,
                session_id: this.session_id
            })
            if ( oTOSession === null ) {
                this.error = oSession.error
                this.message = oSession.message
                return null
            }
        }
        return oTOUser
    }
}