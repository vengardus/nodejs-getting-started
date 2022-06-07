import {User} from '../models/user.js'

export class Auth {
    constructor() {
        this.error = 0
        this.message = ''
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
}