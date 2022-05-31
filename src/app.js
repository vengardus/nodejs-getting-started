import express from 'express'
import projectRoute from './routes/project_route.js'
import taskRoute from './routes/task_route.js'
import bancoRoute from './routes/banco_route.js'

const app = express()

// middlewares
app.use(express.json())

// routes
app.use(projectRoute)
app.use(taskRoute)
app.use(bancoRoute)

export default app