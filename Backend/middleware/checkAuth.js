import jwt from "jsonwebtoken";
import Usuario from "../Models/Usuarios.js";

const checkAuth = async (req, res, next) => {
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try {
            token = req.headers.authorization.split(' ')[1]
            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            req.usuario = await Usuario.findById(decoded.id).select("-password -confirmado -token -createdAt -updatedAt -__v")
            return next()
        } catch (error) {
            res.status(404).json({msg: 'El error es: ' + error })
        }
    }

    if(!token){
        const error = new Error('Token no válido.')
        res.status(201).json({msg: error.message})
    }

    next()
}

export default checkAuth



