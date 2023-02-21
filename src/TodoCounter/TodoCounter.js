import React from "react";
import "./TodoCounter.css";

function TodoCounter({totalItem, completedItem}) {

  return (
    <h2 className="TodoCounter">
      Has completado {completedItem} de {totalItem} TODOs
    </h2>
  );
}

export { TodoCounter };
