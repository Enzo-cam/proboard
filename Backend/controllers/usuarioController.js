import Usuario from '../Models/Usuarios.js'

const registrar = async (req, res) =>{
    try {
        const usuario = new Usuario(req.body)
        // Esperamos que se realice el guardado del usuario en la BDD.
        const usuarioGuardado = await usuario.save()
        res.json(usuarioGuardado)

    } catch (error) {
        console.log(error)
    }

}

export {
    registrar
}
