import express from "express";

const usuariosRouter = express.Router()

usuariosRouter.get('/', (req, res) => {
    res.send('Desde el route de los usuarios')
})

usuariosRouter.post('/', (req, res) => {
    res.send('Posteando en el routing de usuarios')
})

export default usuariosRouter