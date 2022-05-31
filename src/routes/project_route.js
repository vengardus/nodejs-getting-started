import { Router } from "express";
import { 
    getAllProject, 
    createProject, 
    deleteProject, 
    updateProject, 
    getProject, 
    getAllProjectTask} from '../controllers/project_controller.js'

const router = Router()

router.get('/project', getAllProject)
router.post('/project', createProject)
router.put('/project/:id', updateProject)
router.delete('/project/:id', deleteProject)
router.get('/project/:id',getProject)
router.get('/project/:id/task', getAllProjectTask)

export default router  