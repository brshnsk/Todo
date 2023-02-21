import React from "react";
import "./TodoList.css";

function TodoList(props) {
  return (
    <section>
      {props.error && props.onError()}
      {props.loading && props.onLoading()}
      {!props.loading && !props.searchedItem?.length && props.onEmptyTodo()}
      {props.searchedItem.map(props.render)}
      <ul className="TodoList">{props.children}</ul>
    </section>
  );
}

export { TodoList };
