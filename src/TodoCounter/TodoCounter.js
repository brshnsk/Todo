import React from "react";
import "./TodoCounter.css";

function TodoCounter({totalItem, completedItem, loading}) {

  return (
    <h2 
      className={`TodoCounter ${!!loading && "TodoCounter--loading"}`}
      >
      Has completado {completedItem} de {totalItem} TODOs
    </h2>
  );
}

export { TodoCounter };
