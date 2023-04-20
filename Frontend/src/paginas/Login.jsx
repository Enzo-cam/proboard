import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <h1 className="text-center text-slate-900 font-bold text-3xl">
        Inicie sesion en {" "}
        <span className="text-amber-900">ProBoard</span>
      </h1>

      <form className="mt-10 mb-4 bg-white shadow-md rounded-md p-6 items-center max-sm:mx-6">
        <div className="mt-2 mb-6">
          <label htmlFor="email" className="text-slate-900 text-xl font-bold block">Email</label>
          <input type="email" id="email" placeholder="Ingrese su email" className="w-full mt-3 p-2 border rounded-sm bg-gray-50" />
        </div>
        
        <div className="my-6">
          <label htmlFor="password" className="text-slate-900 text-xl font-bold block">Password</label>
          <input type="password" id="password" placeholder="**********" className="w-full mt-3 p-2 border rounded-sm bg-gray-50" />
        </div>

        <div className="flex justify-center">
          <input 
            type="submit"
            value="Iniciar sesión"
            className="bg-amber-900 w-80 py-2 text-white uppercase font-bold rounded-md hover:cursor-pointer hover:bg-amber-950 transition-colors ease-linear"
          />
        </div>
      </form>

      <nav className="lg:flex lg:justify-between">
        <Link
          to="registrar"
          className="block text-center my-5 font-bold text-slate-700 uppercase text-sm"
        >
          Registrarse
        </Link>
        <Link
          to="olvide-password"
          className="block text-center my-5 font-medium text-slate-700 uppercase text-sm"
        >
          Olvidé mi contraseña
        </Link>
      </nav>
    </>
  );
};

export default Login;
