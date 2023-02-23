import React from "react";
import { withStorageListener } from "./withStorageListener";
import "./ChangeAlert.css"

function ChangeAlert({ show, toggleShow }) {
  if (show) {
    return (
      <div className="Container-ChangeAlert">
        <p>Hubo cambios</p>
        <button
            onClick={() => toggleShow(false)}>
            Volver a cargar información
        </button>
      </div>
    );
  } else {
    return null;
  }
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export { ChangeAlertWithStorageListener };
