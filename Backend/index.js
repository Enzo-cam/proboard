import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/db.js"

const app = express()
dotenv.config()
connectDB()


app.listen(5000, () => {
    console.log('Corriendo en puerto 5000')
})