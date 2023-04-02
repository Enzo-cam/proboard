import express from "express";
import { registrar, autenticar, confirmar, olvidePassword, comprobarToken, nuevoPassword } from "../controllers/usuarioController.js";

const usuariosRouter = express.Router()

// Autenticacion, registro y confirmacion de los usuarios.
usuariosRouter.post('/', registrar)

usuariosRouter.post('/login', autenticar)

usuariosRouter.get('/confirmar/:token', confirmar)

usuariosRouter.post('/olvide-password', olvidePassword)

usuariosRouter.get('/olvide-password/:token', comprobarToken)

usuariosRouter.post('/olvide-password/:token', nuevoPassword)

export default usuariosRouter