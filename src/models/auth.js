import {User} from '../models/user.js'

export class Auth {
    constructor() {
        this.error = 0
        this.message = ''
    }

    signIn(email, password) {
        const oUser = new User()
        const is_auth = oUser.signIn(email, password)
        this.error = oUser.error
        this.message = oUser.message
        return is_auth
    }
}