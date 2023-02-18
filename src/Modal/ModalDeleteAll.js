import ReactDOM from "react-dom";
import React from "react";

function ModalDeleteAll({ children }) {
  return ReactDOM.createPortal(
    <div className="ModalBackground">{children}</div>,
    document.getElementById("modal")
  );
}

export { ModalDeleteAll };
