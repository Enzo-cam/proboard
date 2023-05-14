import React from "react";

const Alerta = ({ alerta }) => {
  return (
    <div
      className={`${
        alerta.error ? "from-red-500 to-red-700" : "from-green-500 to-green-700"
      } bg-gradient-to-br text-center p-3 rounded-md uppercase text-white font-bold my-10 w-96 mx-auto `}
    >
      {alerta.msg}
    </div>
  );
};

export default Alerta;
