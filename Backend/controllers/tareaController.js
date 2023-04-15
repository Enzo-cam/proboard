import Tarea from "../Models/Tarea.js"
import Proyecto from "../Models/Proyecto.js"

const getTask = async (req, res) =>{
    // We show the task referer to the id that we receive.
    const {id} = req.params
    const task = await Tarea.findById(id).populate("proyecto")

    if(!task){
        const error = new Error('La tarea no existe..')
        return res.status(404).json({ msg: error.message })
    }else if(task.proyecto.creador.toString() !== req.usuario._id.toString()){
        const error = new Error('Accion no válida.')
        return res.status(403).json({ msg: error.message })
    }

    res.json(task)
}

const newTask = async (req, res) =>{
    // We obtain the project based in the ID that we pass in the req.body
    const {proyecto} = req.body
    // Then we check if that project exist.
    const existeProy = await Proyecto.findById(proyecto)

    if(!existeProy){
        const error = new Error('El proyecto no existe..')
        return res.status(404).json({ msg: error.message })
    }else if(existeProy.creador.toString() !== req.usuario._id.toString()){
        return res.status(403).json({ msg: "Acción no válida." })
    }

    // If the project exist, we saved the task relationated with that project.
    try {
        const savedTask = await Tarea.create(req.body)
        res.json(savedTask)
    } catch (error) {
        console.log(error)
    }
}

const updateTask = async (req, res) =>{
    const {id} = req.params
    const task = await Tarea.findById(id).populate("proyecto")

    if(!task){
        const error = new Error('Tarea no encontrada..')
        return res.status(404).json({ msg: error.message })
    }else if(task.proyecto.creador.toString() !== req.usuario._id.toString()){
        return res.status(404).json({ msg: "Acción no válida." })
    }

    task.nombre = req.body.nombre || task.nombre
    task.descripcion = req.body.descripcion || task.descripcion
    task.prioridad = req.body.prioridad || task.prioridad
    task.fechaEntrega = req.body.fechaEntrega || task.fechaEntrega

    try {
        const editedTask = await task.save()
        res.json(editedTask)
    } catch (error) {
        console.log(error)
    }

}

const deleteTask = async (req, res) =>{
    const {id} = req.params
    const task = await Tarea.findById(id).populate("proyecto")

    if(!task){
        const error = new Error('Tarea no encontrada..')
        return res.status(404).json({ msg: error.message })
    }else if(task.proyecto.creador.toString() !== req.usuario._id.toString()){
        return res.status(404).json({ msg: "Acción no válida." })
    }

    try {
        await task.deleteOne()
        res.json({msg: 'Tarea eliminada'})
    } catch (error) {
        console.log(error)
    }
}

const changeStateTask = async (req, res) =>{
    
}



export {
    getTask,
    newTask,
    updateTask,
    deleteTask,
    changeStateTask
}

