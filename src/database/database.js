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
export const sequelize = new Sequelize(
  'postgresql://postgres:ad1234min@localhost/sample', 
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