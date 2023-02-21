import React from "react";
import "./TodoList.css";

function TodoList(props) {
  return (
    <section>
      {props.error && props.onError()}
      {props.loading && props.onLoading()}

      {!props.loading && !props.totalItem && props.onEmptyTodo()}

      {!!props.totalItem &&
        !props.searchedItem.length &&
        props.onEmptySearchResults(props.searchText)}
      <ul className="TodoList">
        {props.searchedItem.map(props.render || props.children)}
      </ul>
    </section>
  );
}

export { TodoList };
