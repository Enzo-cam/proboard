import Usuario from '../Models/Usuarios.js'
import generarId from '../helpers/generarId.js';

const registrar = async (req, res) =>{
    // Revisando email's duplicados
    const {email} = req.body;
    const emailDuplicado = await Usuario.findOne({email: email}) 

    if(emailDuplicado){
        const error = new Error('El mail ya fue registrado.')
        return res.status(400).json({msg: error.message})
    }

    try {
        const usuario = new Usuario(req.body)
        usuario.token = generarId()
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
