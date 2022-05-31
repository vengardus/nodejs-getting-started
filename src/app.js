import express from 'express'
import path from 'path'
// set __dirname for mode type module
import * as url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

import projectRoute from './routes/project_route.js'
import taskRoute from './routes/task_route.js'
import bancoRoute from './routes/banco_route.js'
import productRoute from './routes/product_route.js'


const app = express()

// middlewares
app.use(express.json())

// sets
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// static
app.use(express.static('static'))

// routes
app.use(projectRoute)
app.use(taskRoute)
app.use(bancoRoute)
app.use(productRoute)


export default app