const NuevoPass = () => {
  return (
    <>
      <h1 className="text-center text-amber-900 font-bold text-3xl">
        ProBoard
      </h1>

      <form className="mt-10 mb-4 bg-white shadow-md rounded-md p-6 items-center max-sm:mx-6">
        <h3 className="text-center mb-10 text-slate-800 font-bold text-2xl">
          Reestablece tu contraseña
        </h3>
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
            placeholder="Ingrese la nueva contraseña"
            className="w-full mt-3 p-2 border rounded-sm bg-gray-50"
          />
        </div>

        <div className="flex justify-center">
          <input
            type="submit"
            value="Guardar nueva contraseña"
            className="bg-amber-900 w-80 py-2 text-white uppercase font-bold rounded-md hover:cursor-pointer hover:bg-amber-950 transition-colors ease-linear"
          />
        </div>
      </form>
    </>
  );
};

export default NuevoPass;
