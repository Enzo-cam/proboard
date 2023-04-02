import jwt from "jsonwebtoken"

const generarJWT = (id) => {
    // Usamos el ID ya que no es de gran relevancia.
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: "30d"
    })
}

export default generarJWT;