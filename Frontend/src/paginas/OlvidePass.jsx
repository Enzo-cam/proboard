import { Link } from "react-router-dom"

const OlvidePass = () => {
  return (
    <>
      <form className="mt-10 mb-4 bg-white shadow-md rounded-md p-6 items-center max-sm:mx-6">
      <h3 className="text-center mb-10 text-amber-900 font-bold text-2xl">Recupera tu contraseña</h3>
        <div className="mt-2 mb-6">
          <label htmlFor="email" className="text-slate-900 text-xl font-bold block">Email</label>
          <input type="email" id="email" placeholder="Ingrese su email" className="w-full mt-3 p-2 border rounded-sm bg-gray-50" />
        </div>

        <input 
            type="submit"
            value="Recuperar contraseña"
            className="bg-amber-900 w-full py-2 text-white uppercase font-bold rounded-md hover:cursor-pointer hover:bg-amber-950 transition-colors ease-linear"
          />
      </form>

      <nav className="lg:flex">
        <Link
          to="/"
          className="block text-center my-5 font-medium text-slate-700 uppercase text-sm"
        >
          Ya tenes cuenta? Logueate
        </Link>
      </nav>
    </>
  )
}

export default OlvidePass