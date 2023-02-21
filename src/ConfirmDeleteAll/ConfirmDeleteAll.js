import React from "react";
import "./ConfirmDeleteAll.css"

function ConfirmDeleteAll({onSubmit, onCancel}) {
 
  return (
    <form onSubmit={onSubmit}>
      <label>Eliminar todos los Todos?</label>
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button-cancel"
          onClick={onCancel}
        >
          Cancelar
        </button>

        <button className="TodoForm-button TodoForm-confirm" type="submit">
          Aceptar
        </button>
      </div>
    </form>
  );
}

export { ConfirmDeleteAll };
