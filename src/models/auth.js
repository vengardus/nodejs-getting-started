import { nanoid } from 'nanoid'
import {SignJWT, jwtVerify} from 'jose'
import {} from 'dotenv/config'
import {User} from '../models/user.js'
import {Session} from '../models/session.js'


export class Auth {
    constructor() {
        this.error = 0
        this.message = ''
        this.session_id = ''
        this.jwt = ''
    }

    async signIn(email, password) {
        const oUser = new User()
        const oTOUser = await oUser.validate_email_password(email, password)
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
            this.message = 'Usuario no autorizado.'
            return null
        }
        
        // generate session id by nanoId
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

        return oTOUser
    }

    async authByToken(email, password) {
        const oTOUser = await this.signIn(email, password)
        if ( oTOUser === null ) {
            this.error = 401
            this.message = 'Usuario no autorizado.'
            return null
        }

        // generate token
        try {
            const user_id = oTOUser.id
            const encoder = new TextEncoder()
            const jwtConstructor = new SignJWT({ user_id })
            const jwt = await jwtConstructor
                .setProtectedHeader({ alg: "HS256", typ:"JWT"} )
                .setIssuedAt()
                .setExpirationTime("1h")
                .sign(encoder.encode(process.env.TOKEN_JWT))
     
            this.jwt = jwt

        } catch (error) {
            this.error = 1
            this.message = error.message
            return null
        }
        return oTOUser
    }

    async verifyToken(authorization) {
        try {
            const encoder = new TextEncoder()
            const jwt_data = await jwtVerify(authorization, encoder.encode(process.env.TOKEN_JWT))
            console.log('JWT', jwt_data)
            const user_id = jwt_data.payload.user_id
            const oUser = new User()
            const oTOUser = await oUser.getById(user_id)
            if ( oTOUser === null )
                return null
            return oTOUser

        } catch (error) {
            this.error = 1
            this.message = error.message
            return null
        }
    }
}