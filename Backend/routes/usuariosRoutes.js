import express from "express";
import { registrar, autenticar, confirmar } from "../controllers/usuarioController.js";

const usuariosRouter = express.Router()

// Autenticacion, registro y confirmacion de los usuarios.
usuariosRouter.post('/', registrar)

usuariosRouter.post('/login', autenticar)

usuariosRouter.get('/confirmar/:token', confirmar)


export default usuariosRouter