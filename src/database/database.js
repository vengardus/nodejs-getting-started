import Sequelize from 'sequelize'
import {} from 'dotenv/config'


/*
export const sequelize = new Sequelize(
    'sample',
    'postgres',
    'ad1234min',import {} from 'dotenv/config'

    {
        host: 'localhost',
        dialect: 'postgres'
    }
)
*/
export const sequelize = new Sequelize(
  process.env.DATABASE_URL, 
  {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    },

    define: {
      // don't add attributes timestamp (createdAt, updatedAt)
      timestamp: true,
      // set field name of createdAt, updatedAt
      createdAt: 'date_created',
      updatedAt: 'date_edit',

      // disable plural name to tablename
      freezeTableName: true
    }
  }
)