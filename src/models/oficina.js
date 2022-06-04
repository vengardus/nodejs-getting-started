import {DataTypes, Model} from 'sequelize'
import {sequelize} from '../database/database.js'

export const Oficina = sequelize.define( 'oficina', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    cod: {
        type: DataTypes.STRING
    },
    desc: {
        type: DataTypes.STRING
    },
    
})
