import React, { useState, useEffect } from "react";

const Crud = () => {
  const [miMensaje, setMiMensaje] = useState("Cargando...");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    /* Setting the state of miMensaje to "Ya faltan 2 segundos para que cargue la página" after 2
    seconds. */
    setTimeout(() => {
      setMiMensaje("Ya faltan 2 segundos para que cargue la página");
    }, 2000);

    /* Setting the state of isLoading to false after 4 seconds. */
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  });

  return (
    <>
      {/* A ternary operator. It is a conditional operator that assigns a value to a variable based on a
      condition. */}
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
