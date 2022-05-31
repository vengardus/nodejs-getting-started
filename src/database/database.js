import Sequelize from 'sequelize'

/*
export const sequelize = new Sequelize(
    'sample',
    'postgres',
    'ad1234min',
    {
        host: 'localhost',
        dialect: 'postgres'
    }
)
*/
export const sequelize = new Sequelize('postgres://hhjduylgxbnxbt:78d2dbad1642c5f8ba8ca678bb54b993028cf856442e666bc1e3414da4367580@ec2-3-227-195-74.compute-1.amazonaws.com:5432/d48o39f9bu4ocg', 
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