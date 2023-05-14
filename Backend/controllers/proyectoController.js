import Proyecto from "../Models/Proyecto.js"
import Tarea from "../Models/Tarea.js"

const getProjects = async (req, res) =>{
    // All project that match the creator and the usuario who request.
    const projects = await Proyecto.find().where('creador').equals(req.usuario)
    res.json(projects)
}

const getProject = async (req, res) =>{
    const {id} = req.params
    const project = await Proyecto.findById(id)

    if(!project){
        const error = new Error('Proyecto no encontrado..')
        return res.status(404).json({ msg: error.message })
    }

    if(project.creador.toString() !== req.usuario._id.toString()){
        return res.status(404).json({ msg: "Proyecto no encontrado." })
    }

    const tasks = await Tarea.find().where("proyecto").equals(project._id)
    res.json({
        project,
        tasks
    })
}

const newProject = async (req, res) =>{
    // New instance of project and asign the creator.
    const project = new Proyecto(req.body)
    project.creador = req.usuario._id

    try {
        const savedProject = await project.save()
        res.json(savedProject)
    } catch (error) {
        console.log(error)
    }
}

const editProject = async (req, res) =>{
    const {id} = req.params
    const project = await Proyecto.findById(id)

    if(!project){
        const error = new Error('Proyecto no encontrado..')
        return res.status(404).json({ msg: error.message })
    }else if(project.creador.toString() !== req.usuario._id.toString()){
        return res.status(404).json({ msg: "Acción no válida." })
    }

    project.nombre = req.body.nombre || project.nombre
    project.descripcion = req.body.descripcion || project.descripcion
    project.cliente = req.body.cliente || project.cliente
    project.fechaEntrega = req.body.fechaEntrega || project.fechaEntrega

    try {
        const editedProject = await project.save()
        res.json(editedProject)
    } catch (error) {
        console.log(error)
    }
}

const deleteProject = async (req, res) =>{
    const {id} = req.params
    const project = await Proyecto.findById(id)

    if(!project){
        const error = new Error('Proyecto no encontrado..')
        return res.status(404).json({ msg: error.message })
    }else if(project.creador.toString() !== req.usuario._id.toString()){
        return res.status(404).json({ msg: "Acción no válida." })
    }

    try {
        await project.deleteOne()
        res.json({msg: 'Proyecto eliminado'})
    } catch (error) {
        console.log(error)
    }
}

const addColaborator = async (req, res) =>{

}

const deleteColaborator = async (req, res) =>{

}


export {
    getProjects,
    getProject,
    newProject,
    editProject,
    deleteProject,
    addColaborator,
    deleteColaborator,
}

