import { Link } from "react-router-dom";

const Registrar = () => {
  return (
    <>
      <h1 className="text-center text-amber-900 font-bold text-3xl">
        ProBoard
      </h1>


      <form className="mt-10 mb-4 bg-white shadow-md rounded-md p-6 items-center max-sm:mx-6">
      <h3 className="text-center mb-10 text-slate-800 font-bold text-2xl">Registrese para empezar a manejar sus proyectos de una manera distinta</h3>
        <div className="mt-2 mb-6">
          <label htmlFor="email" className="text-slate-900 text-xl font-bold block">Email</label>
          <input type="email" id="email" placeholder="Ingrese su email" className="w-full mt-3 p-2 border rounded-sm bg-gray-50" />
        </div>
        
        <div className="my-6">
          <label htmlFor="password" className="text-slate-900 text-xl font-bold block">Contraseña</label>
          <input type="password" id="password" placeholder="**********" className="w-full mt-3 p-2 border rounded-sm bg-gray-50" />
        </div>

        <div className="my-6">
          <label htmlFor="password2" className="text-slate-900 text-xl font-bold block">Reingrese su contraseña</label>
          <input type="password" id="password2" placeholder="**********" className="w-full mt-3 p-2 border rounded-sm bg-gray-50" />
        </div>

        <div className="flex justify-center">
          <input 
            type="submit"
            value="Registrarme"
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
