import express from 'express'
import {
    getProjects,
    getProject,
    newProject,
    editProject,
    deleteProject,
    addColaborator,
    deleteColaborator,
    obtainTasks
} from '../controllers/proyectoController.js'

import checkAuth from '../middleware/checkAuth.js'

const proyectosRouter = express.Router()

proyectosRouter
    .route('/')
    .get(checkAuth, getProjects)
    .post(checkAuth, newProject);

proyectosRouter
    .route('/:id')
    .get(checkAuth, getProject)
    .put(checkAuth, editProject)
    .delete(checkAuth, deleteProject)

proyectosRouter
    .route('/tareas/:id', checkAuth, obtainTasks)

proyectosRouter
    .post('/add-colaborator/:id', checkAuth, addColaborator)

proyectosRouter
    .post('/add-colaborator/:id', checkAuth, deleteColaborator)


export default proyectosRouter