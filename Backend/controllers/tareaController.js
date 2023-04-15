import Tarea from "../Models/Tarea.js"
import Proyecto from "../Models/Proyecto.js"

const getTask = async (req, res) =>{
    // All tasks that match the creator and the usuario who request.
    const tasks = await Tarea.find().where('creador').equals(req.usuario)

    res.json(tasks)
}

const newTask = async (req, res) =>{
    // New instance of project and asign the creator.
    const {proyecto} = req.body
    const existeProy = await Proyecto.findById(proyecto)

    if(!existeProy){
        const error = new Error('El proyecto no existe..')
        return res.status(404).json({ msg: error.message })
    }else if(existeProy.creador.toString() !== req.usuario._id.toString()){
        return res.status(404).json({ msg: "Acción no válida." })
    }

    try {
        const savedTask = await Tarea.create(req.body)
        res.json(savedTask)
    } catch (error) {
        console.log(error)
    }


}


const updateTask = async (req, res) =>{
    const {id} = req.params
    const task = await Tarea.findById(id)

    if(!task){
        const error = new Error('Tarea no encontrada..')
        return res.status(404).json({ msg: error.message })
    }else if(task.creador.toString() !== req.usuario._id.toString()){
        return res.status(404).json({ msg: "Acción no válida." })
    }

    task.nombre = req.body.nombre || task.nombre
    task.descripcion = req.body.descripcion || task.descripcion

    try {
        const editedTask = await task.save()
        res.json(editedTask)
    } catch (error) {
        console.log(error)
    }
}

const deleteTask = async (req, res) =>{
    const {id} = req.params
    const task = await Tarea.findById(id)

    if(!task){
        const error = new Error('Tarea no encontrada..')
        return res.status(404).json({ msg: error.message })
    }else if(task.creador.toString() !== req.usuario._id.toString()){
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

