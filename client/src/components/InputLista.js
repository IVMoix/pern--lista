import React, { Fragment, useState } from "react";

const InputLista = () => {
    const [description, setDescription] = useState("");

    const onSubmitForm = async e => {
      e.preventDefault();
      try {
        const body = { description };
        const response = await fetch("http://localhost:5000/lista", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        });
  
        window.location = "/";
      } catch (err) {
        console.error(err.message);
      }
    };
  
    return (
      <Fragment>
        <h1 className="text-center mt-5">Pern Lista de Tareas</h1>
        <form className="d-flex mt-5" onSubmit={onSubmitForm}>
          <input
            type="text"
            className="form-control"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <button className="btn btn-success">Agregar</button>
        </form>
      </Fragment>
    );
  };
export default InputLista;