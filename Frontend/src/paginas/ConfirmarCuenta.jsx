import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Alerta from "../componentes/Alerta";

const ConfirmarCuenta = () => {
  const [alerta, setAlerta] = useState({});
  const [cuentaConf, setCuentaConf] = useState(false);
  const params = useParams();
  const { id } = params;

  useEffect(() => {
    const confCuenta = async () => {
      try {
        const url = `http://localhost:5000/api/usuarios/confirmar/${id}`;
        const { data } = await axios(url);

        setAlerta({
          msg: data.msg,
          error: false,
        });
        setCuentaConf(true);
      } catch (error) {
        setAlerta({
          msg: error.response.data.msg,
          error: true,
        });
      }
    };

    confCuenta();
  }, []);

  const { msg } = alerta;

  return (
    <>
      <h3 className="text-center mb-6 text-slate-800 font-bold text-3xl">
        Confirme su cuenta para empezar a usar{" "}
        <span className="text-amber-900">ProBoard</span>
      </h3>

      <div className="mt-15 md:mt-6 shadow-lg px-5 py-8 rounded-lg bg-white">
        {msg && <Alerta alerta={alerta} />}

        {cuentaConf && (
          <Link
            to="/"
            className="block text-center my-5 font-bold text-slate-700 uppercase text-sm"
          >
            Inicia sesion
          </Link>
        )}
      </div>
    </>
  );
};

export default ConfirmarCuenta;
