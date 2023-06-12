import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/db.js"
import usuariosRouter from "./routes/usuariosRoutes.js"
import proyectosRouter from "./routes/proyectoRoutes.js"
import tareasRouter from "./routes/tareaRoutes.js"
import cors from 'cors'

const app = express()
app.use(express.json())
dotenv.config()
connectDB()

// Habilitar CORS
const whitelist = [process.env.FRONT_URL, process.env.VITE_BACK_URL]

const corsOptions = {
    origin : function(origin, callback){
        if(whitelist.includes(origin)){
            callback(null, true)
        }else{
            callback(new Error('Error de CORSssssss'))
        }
    }
}

app.use(cors(corsOptions))

// Routing para cada endpoint
app.use('/api/usuarios', usuariosRouter)
app.use('/api/proyectos', proyectosRouter)
app.use('/api/tareas', tareasRouter)


app.listen(5000, () => {
    console.log('Corriendo en puerto 5000')
})