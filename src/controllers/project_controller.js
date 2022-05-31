import {Project} from '../models/project.js'
import {Task} from '../models/task.js'

export const getAllProject = async (req, res) => {
    try {
        const aProject= await Project.findAll()
        res.json(aProject)    
    } catch (error) {
        return res.status(500).json({ message: error.message})
    }
}

export const createProject = async(req, res) => {
    try {
        const {name, priority, description} = req.body
        const newProject = await Project.create({
            name,
            description,
            priority
        })
        res.json(newProject)    
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

export const deleteProject = async (req, res) => {
    try {
        const { id } = req.params
        const project = await Project.findByPk(id)
        if ( project === null)
            return res.status(404).json({message:"Project not found"})

        await Project.destroy({
            where: {
                id
            }
        })
        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}

export const updateProject = async(req, res) => {
    try {
        const { id } = req.params
        const { name, priority, description } = req.body

        const project = await Project.findByPk(id)
        if ( project === null)
            return res.status(404).json({message:"Project not found"})

        project.name = name 
        project.priority = priority
        project.description = description  
        await project.save()

        res.json(project)
    } catch (error) {
        return req.status(500).json({message:error.message})
        
    }
}

export const getProject = async(req, res) => {
    try {
        const { id } = req.params
        const project = await Project.findOne({
            where: {
                id
            }
        })
        if ( project === null )
            return res.status(404).json({message:"Project not found"})
        
        res.json(project)

    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}

export const getAllProjectTask = async (req, res) => {
    try {
        const { id } = req.params
        /*
        const aTask = await Task.findAll({
            where: {
                projectId: id
            }
        })
        res.json(aTask)
        */
        const aProject = await Project.findByPk(id, {
            include: [
                { model: Task}
            ]
        })
        res.json(aProject.tasks)
        //console.log(aTask.length)

    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}