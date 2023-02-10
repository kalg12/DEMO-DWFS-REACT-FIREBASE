import React, { useState, useEffect } from "react";

const Crud = () => {
  const [miMensaje, setMiMensaje] = useState("Cargando...");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setMiMensaje("Ya faltan 2 segundos para que cargue la página");
    }, 2000);

    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  });

  return (
    <>
      {isLoading ? (
        <>
          <h1>{miMensaje}</h1>
        </>
      ) : (
        <>
          <div>Crud</div>
          <div>Kevin</div>
        </>
      )}
    </>
  );
};

export default Crud;
