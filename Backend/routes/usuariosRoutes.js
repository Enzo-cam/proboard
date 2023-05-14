import express from "express";
import { registrar, autenticar, confirmar, olvidePassword, comprobarToken, nuevoPassword, perfil } from "../controllers/usuarioController.js";
import checkAuth from "../middleware/checkAuth.js";

const usuariosRouter = express.Router()

// Autenticacion, registro y confirmacion de los usuarios.
usuariosRouter.post('/', registrar) //Crear usuario

usuariosRouter.post('/login', autenticar)//Autenticamos a los usuarios

usuariosRouter.get('/confirmar/:token', confirmar) //Segun el token que llega, confirmamos al usuario

usuariosRouter.post('/olvide-password', olvidePassword)

usuariosRouter.route('/olvide-password/:token').get(comprobarToken).post(nuevoPassword)

usuariosRouter.get('/perfil', checkAuth, perfil)

export default usuariosRouter