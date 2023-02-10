import React, { useState, useEffect } from "react";
import { db } from "../firebase/firebase";
import {
  collection,
  getDoc,
  getDocs,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

const initialForm = {
  nombre: "",
  apellido: "",
  edad: "",
  bootcamp: "",
};

const MiCrud = () => {
  const [ucamper, setUcamper] = useState([]);
  const [form, setForm] = useState(initialForm);

  //Crea un array con 3 objetos que tenga nombre y apellidos random, el array se debe de llamar personas
  const personas = [
    {
      nombre: "Juan",
      apellido: "Perez",
    },
    {
      nombre: "Maria",
      apellido: "Gomez",
    },
    {
      nombre: "Pedro",
      apellido: "Lopez",
    },
    //agrega 3 más

    {
      nombre: "Juan",
      apellido: "Perez",
    },
    {
      nombre: "Maria",
      apellido: "Gomez",
    },
    {
      nombre: "Pedro",
      apellido: "Lopez",
    },
  ];

  const getucampers = async () => {
    const respuesta = await getDocs(collection(db, "ucampers"));
    const ucampers = respuesta.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setUcamper(ucampers);
    console.log(ucampers);
  };

  const createUcamper = async () => {
    const coleccion = collection(db, "ucampers");
    await addDoc(coleccion, form);
    await getucampers();
  };

  const updateUcamper = async (id) => {
    /* Colocamos los datos del campo y lo llevamos al formulario */
    const coleccion = collection(db, "ucampers");
    const ucamper = await getDoc(doc(coleccion, id));
    console.log(ucamper.data());
    setForm(ucamper.data());

    /* Actualizamos los datos del formulario */
    await updateDoc(doc(coleccion, id), form);
    await getucampers();
  };

  const deleteUcamper = async (id) => {
    const coleccion = doc(db, "ucampers", id);
    await deleteDoc(coleccion);
    await getucampers();
  };

  useEffect(() => {
    getucampers();
  }, []);

  return (
    <>
      <div className="container mt-2">
        {" "}
        <h2>Crud</h2>
        <hr />
        <div className="row">
          <div className="col-4">
            <h3>Formulario</h3>
            <form>
              <input
                id="nombre"
                type="text"
                placeholder="Nombre"
                autoComplete="off"
                className="form-control"
                value={form.nombre}
                onChange={(e) => {
                  setForm({ ...form, nombre: e.target.value });
                }}
              />
              <input
                id="apellido"
                type="text"
                placeholder="Apellido"
                autoComplete="off"
                className="form-control"
                value={form.apellido}
                onChange={(e) => {
                  setForm({ ...form, apellido: e.target.value });
                }}
              />
              <input
                id="edad"
                type="number"
                placeholder="Edad"
                autoComplete="off"
                className="form-control"
                value={form.edad}
                onChange={(e) => {
                  setForm({ ...form, edad: e.target.value });
                }}
              />
              <input
                id="bootcamp"
                type="text"
                placeholder="Bootcamp"
                autoComplete="off"
                className="form-control"
                value={form.bootcamp}
                onChange={(e) => {
                  setForm({ ...form, bootcamp: e.target.value });
                }}
              />
              <button
                className="btn btn-primary btn-block mt-2"
                onClick={async (e) => {
                  e.preventDefault();
                  await createUcamper();
                  setForm(initialForm);
                }}
              >
                Agregar
              </button>
            </form>
          </div>
        </div>
        <div className="col-8">
          <h3>Lista de ucampers</h3>
          <ul className="list-group">
            {ucamper.map((ucamper) => (
              <li className="list-group-item" key={ucamper.id}>
                {ucamper.nombre} {ucamper.apellido} {ucamper.edad}{" "}
                {ucamper.bootcamp}
                <button
                  className="btn btn-danger btn-sm float-end"
                  onClick={() => deleteUcamper(ucamper.id)}
                >
                  Eliminar
                </button>
                <button
                  className="btn btn-warning btn-sm float-end"
                  onClick={() => updateUcamper(ucamper.id)}
                >
                  Editar
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {personas.map((lasPersonas, index) => (
        <div key={index}>
          <h1>{lasPersonas.nombre}</h1>
        </div>
      ))}
    </>
  );
};

export default MiCrud;
