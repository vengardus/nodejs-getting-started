import app from './app.js'
import {sequelize} from './database/database.js'

// add import only for sync models with database
// import './models/project.js'
// import './models/task.js'
// import './models/product.js'

async function main() {
    try {
        await sequelize.sync({force:false})
        //await sequelize.sync({force:true}) // drop and create

        // validate if connection is success
        await sequelize.authenticate()
        console.log('Connection has been established successfully.')

        app.listen(process.env.PORT || 3000)
        console.log('Server is listening port', process.env.PORT || 3000)
        console.log(process.env.DATABASE_URL)
    } catch (error) {
        console.log('Unable to connect to the database', error)        
    }
}

main()
