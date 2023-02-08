import React from "react";
import "./TodoItem.css";

function TodoItem(props) {
  
  return (
    <li className="TodoItem">
      <span
        className={`Icon ${props.completed && "Icon-check--active"}`}
        onClick={props.onComplete}
      >
        <i className="fa-solid fa-check"></i>
      </span>
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--completed"}`}>
        {props.text}
      </p>
      <span 
      className="Icon Icon-delete"
      onClick={props.onDelete}
      >
      X
      </span>
    </li>
  );
}

export { TodoItem };
