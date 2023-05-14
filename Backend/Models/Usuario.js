import mongoose from "mongoose";
import bcrypt from "bcrypt"


const usuarioSchema = mongoose.Schema({
        nombre:{
            type: String,
            required: true,
            trim: true
        },
        password:{
            type: String,
            required: true,
            trim: true
        },
        email:{
            type: String,
            required: true,
            trim: true,
            unique: true
        },
        token:{
            type: String,
        },
        confirmado:{
            type: Boolean,
            default: false
        }
    },{
        timestamps: true,
    }
)

// El codigo se ejecuta ANTES de guardar en la BDD.
usuarioSchema.pre('save', async function(next){
    // Evitar que vuelva a realizar el hash en una contraseña si es que no se esta modificando la contraseña AL realizar cambios en el usuario.
    if(!this.isModified('password')){
        next()
    }

    const salt = await bcrypt.genSalt(10)
    // Hacemos referencia a la password del usuario que llega PREVIAMENTE a ser guardado cuando ejecutamos el controlador de registrar.
    this.password = await bcrypt.hash(this.password, salt)
})

usuarioSchema.methods.comprobarPassword = async function(passwordForm){
    // Comprobando que la contraseña que se ingresa al loguear sea la misma que ya esta guardada y encriptada en la base de datos.
    // Es decir, compara la que llega desde el REQUEST con la del USUARIO que ya esta creado.
    return await bcrypt.compare(passwordForm, this.password)
}

// Crea el modelo en la BDD
const Usuario = mongoose.model("Usuario", usuarioSchema)

export default Usuario;