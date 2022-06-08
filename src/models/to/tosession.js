import { DataTypes } from "sequelize"
import { sequelize } from "../../database/database.js"

export const TOSession = sequelize.define('session', {
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    session_id: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    
    license_id: {
        type: DataTypes.INTEGER,
        defaultValue: 1
    },
    user_created_id: {
        type: DataTypes.INTEGER
    },
    user_edit_id: {
        type: DataTypes.INTEGER
    },
    status: {
        type: DataTypes.STRING(1),
        defaultValue: 'A'
    }
})