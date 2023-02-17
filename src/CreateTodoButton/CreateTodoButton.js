import React from "react";
import { TodoContext } from "../TodoContext/TodoContext";
import "./CreateTodoButton.css";

function CreateTodoButton(props) {
    // const {openModal, setOpenModal} = React.useContext(TodoContext)
    const onClickButton = () => {
        props.setOpenModal(prevState => !prevState);
    };
  
    return (
      <button className="CreateTodoButton" onClick={() => onClickButton()}>
        +
      </button>
    );
  }

export {CreateTodoButton};