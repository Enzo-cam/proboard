import express from "express";
import { registrar, autenticar } from "../controllers/usuarioController.js";

const usuariosRouter = express.Router()

// Autenticacion, registro y confirmacion de los usuarios.
usuariosRouter.post('/', registrar)

usuariosRouter.post('/login', autenticar)


export default usuariosRouter