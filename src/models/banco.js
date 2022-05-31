import {DataTypes, Model} from 'sequelize'
import {sequelize} from '../database/database.js'

export const Banco = sequelize.define( 'base_banco', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
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
    desc: {
        type: DataTypes.STRING
    }
},
{
    // don't add attributes timestamp (createdAt, updatedAt)
    //timestamp: false,

    // disable plural name to tablename
    //freezeTableName: true
    
    // set tablename
    //tableName: 'base_banco'
})
