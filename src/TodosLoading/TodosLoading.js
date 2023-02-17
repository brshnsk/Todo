import React from "react";
import "./TodosLoading.css";

function TodosLoading() {
  return (
    <div className="Container">
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export { TodosLoading };
