import express from 'express'
import {
    getTask,
    newTask,
    updateTask,
    deleteTask,
    changeStateTask
} from '../controllers/tareaController.js'

import checkAuth from '../middleware/checkAuth.js'

const tareasRouter = express.Router()

tareasRouter
    .route('/')
    .post(checkAuth, newTask);

tareasRouter
    .route('/:id')
    .get(checkAuth, getTask)
    .put(checkAuth, updateTask)
    .delete(checkAuth, deleteTask)

tareasRouter
    .post('/estado/:id', checkAuth, changeStateTask)


export default tareasRouter