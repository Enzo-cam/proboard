import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/db.js"
import usuariosRouter from "./routes/usuariosRoutes.js"

const app = express()
app.use(express.json())
dotenv.config()
connectDB()


// Routing
app.use('/api/usuarios', usuariosRouter)


app.listen(5000, () => {
    console.log('Corriendo en puerto 5000')
})