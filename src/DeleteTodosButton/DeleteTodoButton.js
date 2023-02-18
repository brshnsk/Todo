import React from "react";
import "./DeleteTodoButton.css";

function DeleteTodoButton(props) {
  
  const onClickButton = () => {
    props.setOpenConfirmDeleteModal((prevState) => !prevState);
    // props.deleteAll()
  };

  return (
    <a className="DeleteTodoButton" onClick={() => onClickButton()}>
      <i className="fa-solid fa-trash"></i>
    </a>
  );
}

export { DeleteTodoButton };
