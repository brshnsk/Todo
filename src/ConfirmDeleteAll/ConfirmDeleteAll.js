import React from "react";
import { TodoContext } from "../TodoContext/TodoContext";
import "./ConfirmDeleteAll.css"

function ConfirmDeleteAll() {
  const { openConfirmDeleteModal, setOpenConfirmDeleteModal } =
    React.useContext(TodoContext);

  const onCancel = () => {
    setOpenConfirmDeleteModal(false);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    window.localStorage.clear();
    setOpenConfirmDeleteModal(false);
  };
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
