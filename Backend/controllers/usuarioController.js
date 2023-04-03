import Usuario from '../Models/Usuarios.js'
import generarId from '../helpers/generarId.js';
import generarJWT from '../helpers/generarJWT.js';

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

const autenticar = async (req, res) => {
    // Existe el usuario?
    const {email, password} = req.body

    const usuario = await Usuario.findOne({email})
    if(!usuario){
        const error = new Error('El usuario no existe.')
        return res.status(404).json({msg: error.message})
    }

    // Comprobar confirmacion
    if(!usuario.confirmado){
        const error = new Error('Por favor confirme su cuenta.')
        return res.status(403).json({msg: error.message})
    }

    // Comprobar contraseña
    if(await usuario.comprobarPassword(password)){
        res.json({
            _id: usuario._id,
            nombre: usuario.nombre,
            email: usuario.email,
            token: generarJWT(usuario._id)
        })
    }else{
        const error = new Error('La contraseña es incorrecta.')
        return res.status(403).json({msg: error.message})
    }
}

// Confirmamos al usuario que fue registrado y lo guardamos.
const confirmar = async (req, res) =>{

    const {token} = req.params

    // Buscamos al usuario según el token que se pasó en el parametro.
    const usuarioConfirm = await Usuario.findOne({token})

    if(!usuarioConfirm){
        const error = new Error('Token no válido.')
        return res.status(403).json({ msg: error.message })
    }

    // En caso de encontrar al usuario lo confirmamos y vaciamos el campo de token.
    // Por ultimo guardamos los cambios ejecutados.
    try {
        usuarioConfirm.confirmado = true
        usuarioConfirm.token = ''
        await usuarioConfirm.save()
        res.json({msg: 'Usuario confirmado correctamente.'})
    } catch (error) {
        console.log(error)
    }
}

// Generamos un nuevo token el cual se manda por email para luego generar una nueva contraseña.
const olvidePassword = async (req, res) => {
    const { email } = req.body
    const usuario = await Usuario.findOne({email}) 

    if(!usuario){
        const error = new Error('El usuario no existe.')
        return res.status(404).json({msg: error.message})
    }

    try {
        usuario.token = generarId()
        await usuario.save()
        res.json({msg: 'Hemos enviado un mail con instrucciones para recuperar su contraseña'})
    } catch (error) {
        console.log(error)
    }

}

// Comprobamos que el token que se pasa es valido
const comprobarToken = async (req, res) => {
    const {token} = req.params;

    const tokenValido = await Usuario.findOne({token})

    if(tokenValido){
        res.json({msg: 'Token válido. El usuario existe'})
    }else{
        const error = new Error('Token no valido.')
        return res.status(400).json({msg: error.message})
    }

}

// Seteamos la nueva contraseña pasada en el body al token correspondiente
const nuevoPassword = async (req, res) => {
    const {token} = req.params
    const {password} = req.body

    const usuario = await Usuario.findOne({token})

    if(usuario){
        usuario.password = password
        usuario.token = ''
        try {
            await usuario.save()
            res.json({msg: 'Contraseña modificada'})    
        } catch (error) {
            console.log(error)
        }
    }else{
        const error = new Error('Token no válido.')
        return res.status(403).json({ msg: error.message })
    }

}

const perfil = async (req, res) =>{
    const {usuario} = req

    res.json(usuario)
}


export {
    registrar,
    autenticar,
    confirmar,
    comprobarToken,
    olvidePassword,
    nuevoPassword,
    perfil
}
