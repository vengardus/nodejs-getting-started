import {Task} from '../models/task.js'

export const getAllTask = async (req, res) => {
    try {
        const aTask = await Task.findAll({
            order: [
                ['id']
            ]
        })
        res.json(aTask)
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}

export const createTask = async(req, res) => {
    try {
        const {name, done, projectId} = req.body
        const newTask = await Task.create({
            name,
            done,
            projectId
        })
        res.json(newTask)    
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

export const getTask = async(req, res) => {
    try {
        const { id } = req.params
        const task = await Task.findOne({
            where: {
                id
            },
            attributes: ['name']
        })
        if ( task === null )
            return res.status(404).json({message:"Task not found"})
        
        res.json(task)

    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}

export const deleteTask = async (req, res) => {
    try {
        const { id } = req.params
        const task = await Task.findByPk(id)
        if ( task === null)
            return res.status(404).json({message:"Task not found"})

        await Task.destroy({
            where: {
                id
            }
        })
        res.sendStatus(204)

    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}

export const updateTask = async(req, res) => {
    try {
        const { id } = req.params
        const { name, done, projectId } = req.body

        const task = await Task.findByPk(id)
        if ( task === null)
            return res.status(404).json({message:"Task not found"})

        task.name = name 
        task.done = done
        task.projectId = projectId
        await task.save()

        res.json(task)

    } catch (error) {
        return req.status(500).json({message:error.message})
        
    }
}
