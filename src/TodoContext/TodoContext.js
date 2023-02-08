import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider(props) {
  const { item, saveItem, dataStatus } = useLocalStorage("Item_V1", []);

  const [searchValue, setSearchValue] = React.useState("");

  const completedItem = item.filter((todo) => !!todo.completed).length;
  const totalItem = item.length;

  let searchedItem = [];

  if (!searchValue.length >= 1) {
    searchedItem = item;
  } else {
    searchedItem = item.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const completeTodo = (text) => {
    const todoIndex = item.findIndex((todo) => todo.text === text);
    const newItem = [...item];
    newItem[todoIndex].completed = true;
    saveItem(newItem);
  };

  const deleteTodo = (text) => {
    const todoIndex = item.findIndex((todo) => todo.text === text);
    const newItem = [...item];
    newItem.splice(todoIndex, 1);
    saveItem(newItem);
  };
  return (
    <TodoContext.Provider
      value={{
        dataStatus,
        totalItem,
        completedItem,
        searchValue,
        setSearchValue,
        searchedItem,
        completeTodo,
        deleteTodo,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}


export {TodoContext, TodoProvider};
