import jwt from "jsonwebtoken";
import Usuario from "../Models/Usuario.js";

const checkAuth = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // Separamos en dos y nos quedamos solamente con la parte del TOKEN
      token = req.headers.authorization.split(" ")[1];
      // Decodificamos con la info q nos llega y nuestra firma del JWT
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Mediante el ID que llega del decoded, traemos al usuario desde la BDD
      // Y lo asignamos a la req para luego usarlo en el proximo controller.
      req.usuario = await Usuario.findById(decoded.id).select(
        "-password -confirmado -token -createdAt -updatedAt -__v"
      );
      return next();
    } catch (error) {
      return res.status(404).json({ msg: "El error es: " + error });
    }
  }

  if (!token) {
    const error = new Error("Token no válido.");
    return res.status(201).json({ msg: error.message });
  }

  next();
};

export default checkAuth;
