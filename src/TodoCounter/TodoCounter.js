import React from "react";
import { TodoContext } from "../TodoContext/TodoContext";
import "./TodoCounter.css";

function TodoCounter() {
  const { totalItem, completedItem} = React.useContext(TodoContext);

  return (
    <h2 className="TodoCounter">
      Has completado {completedItem} de {totalItem} TODOs
    </h2>
  );
}

export { TodoCounter };
