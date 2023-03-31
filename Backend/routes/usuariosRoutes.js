import express from "express";
import { registrar } from "../controllers/usuarioController.js";

const usuariosRouter = express.Router()

// Autenticacion, registro y confirmacion de los usuarios.
usuariosRouter.post('/', registrar)


export default usuariosRouter