import express from "express";
import { registrar, autenticar, confirmar, olvidePassword, comprobarToken, nuevoPassword, perfil } from "../controllers/usuarioController.js";
import checkAuth from "../middleware/checkAuth.js";

const usuariosRouter = express.Router()

// Autenticacion, registro y confirmacion de los usuarios.
usuariosRouter.post('/', registrar)

usuariosRouter.post('/login', autenticar)

usuariosRouter.get('/confirmar/:token', confirmar)

usuariosRouter.post('/olvide-password', olvidePassword)

usuariosRouter.get('/olvide-password/:token', comprobarToken)

usuariosRouter.post('/olvide-password/:token', nuevoPassword)

usuariosRouter.get('/perfil', checkAuth, perfil)

export default usuariosRouter