import { DataTypes } from "sequelize"
import { sequelize } from "../../database/database.js"

export const TOUser = sequelize.define('user', {
    name: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(200),
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING(80),
        allowNull: false
    },
    user_type: {
        type: DataTypes.STRING(1),
        defaultValue: 'U'
    },
    image_filename: {
        type: DataTypes.STRING(255),
        defaultValue: "avatar.svg"
    },
    modo_apariencia:  {
        type: DataTypes.STRING(1),
        defaultValue: '0'
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