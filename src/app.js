import express from 'express'
import path from 'path'
// set __dirname for mode type module
import * as url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

import projectRoute from './routes/project_route.js'
import taskRoute from './routes/task_route.js'
import bancoRoute from './routes/banco_route.js'
import productRoute from './routes/product_route.js'
import localRoute from './routes/local_route.js'
import oficinaRoute from './routes/oficina_route.js'
import testRoute from './routes/test_route.js'
import userRoute from './routes/user_route.js'
import authRoute from './routes/auth_route.js'

const app = express()

// middlewares
app.use(express.json())
app.use(express.text())

// sets
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// static
export const static_path = path.join(__dirname, 'static')
app.use(express.static(static_path))

// routes   
app.use(projectRoute)
app.use(taskRoute)
app.use(bancoRoute)
app.use(productRoute)
app.use(oficinaRoute)
app.use(localRoute)
app.use(testRoute)
app.use(userRoute)
app.use(authRoute)


export default app