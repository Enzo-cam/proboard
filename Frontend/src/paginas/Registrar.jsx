import { useState } from "react";
import { Link } from "react-router-dom";
import Alerta from "../componentes/Alerta";

const Registrar = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repetirPass, setRepetirPass] = useState("");
  const [alerta, setAlerta] = useState({})

  const handleSubmit = e => {
    e.preventDefault()

    if([nombre, email, password, repetirPass].includes('')){
      setAlerta({
        msg: 'Todos los campos son obligatorios',
        error: true
      })
      return
    }
  }

  const {msg} = alerta;
  return (
    <>
      <h1 className="text-center text-amber-900 font-bold text-4xl">
        ProBoard
      </h1>
      {msg && <Alerta alerta={alerta} />}
      <form 
        className="mt-10 mb-4 bg-white shadow-md rounded-md p-6 items-center max-sm:mx-6"
        onSubmit={handleSubmit}
      >
        <h3 className="text-center mb-10 text-slate-800 font-bold text-2xl">
          Registrese para empezar a manejar sus proyectos de una manera distinta
        </h3>
        <div className="mt-2 mb-6">
          <label
            htmlFor="name"
            className="text-slate-900 text-xl font-bold block"
          >
            Nombre
          </label>
          <input
            type="text"
            id="name"
            placeholder="Ingrese su nombre completo"
            className="w-full mt-3 p-2 border rounded-sm bg-gray-50"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="mt-2 mb-6">
          <label
            htmlFor="email"
            className="text-slate-900 text-xl font-bold block"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Ingrese su email"
            className="w-full mt-3 p-2 border rounded-sm bg-gray-50"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="my-6">
          <label
            htmlFor="password"
            className="text-slate-900 text-xl font-bold block"
          >
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            placeholder="**********"
            className="w-full mt-3 p-2 border rounded-sm bg-gray-50"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="my-6">
          <label
            htmlFor="password2"
            className="text-slate-900 text-xl font-bold block"
          >
            Reingrese su contraseña
          </label>
          <input
            type="password"
            id="password2"
            placeholder="**********"
            className="w-full mt-3 p-2 border rounded-sm bg-gray-50"
            value={repetirPass}
            onChange={(e) => setRepetirPass(e.target.value)}
          />
        </div>

        <div className="flex justify-center">
          <input
            type="submit"
            value="Registrarse"
            className="bg-amber-900 w-80 py-2 text-white uppercase font-bold rounded-md hover:cursor-pointer hover:bg-amber-950 transition-colors ease-linear"
          />
        </div>
      </form>

      <nav className="lg:flex">
        <Link
          to="/"
          className="block text-center my-5 font-bold text-slate-700 uppercase text-sm"
        >
          Ya tenes cuenta? <span className="text-amber-900">Logueate</span>
        </Link>
      </nav>
    </>
  );
};

export default Registrar;
