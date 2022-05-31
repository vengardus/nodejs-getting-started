import {DataTypes, Model} from 'sequelize'
import {sequelize} from '../database/database.js'

export const Product = sequelize.define( 'tbprod', {
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
    
    license_id: {
        type: DataTypes.INTEGER
    },
    user_created_id: {
        type: DataTypes.INTEGER
    },
    date_created: {
        type: DataTypes.DATE
    },
    user_edit_id: {
        type: DataTypes.INTEGER
    },
    date_edit: {
        type: DataTypes.DATE
    },
    status: {
        type: DataTypes.CHAR
    },
})
