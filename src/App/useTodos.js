import React from "react";
import { useLocalStorage } from "./useLocalStorage";

function useTodos() {
  const { item, saveItem, dataStatus } = useLocalStorage("Item_V1", []);

  const [searchValue, setSearchValue] = React.useState("");

  const [openModal, setOpenModal] = React.useState(false);

  const [openConfirmDeleteModal, setOpenConfirmDeleteModal] =
    React.useState(false);

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

  const addTodo = (text) => {
    if (!text) {
      return;
    }
    const newItem = [...item];
    newItem.push({
      completed: false,
      text,
    });
    saveItem(newItem);
  };

  const deleteTodo = (text) => {
    const todoIndex = item.findIndex((todo) => todo.text === text);
    const newItem = [...item];
    newItem.splice(todoIndex, 1);
    saveItem(newItem);
  };

  // DeleteAllButton
  const deleteAll = () => {
    window.localStorage.clear();
  };

  const onCancel = () => {
    setOpenConfirmDeleteModal(false);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    window.localStorage.clear();
    setOpenConfirmDeleteModal(false);
  };
  //
  
  return {
    dataStatus,
    totalItem,
    completedItem,
    addTodo,
    searchValue,
    setSearchValue,
    searchedItem,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    deleteAll,
    openConfirmDeleteModal,
    setOpenConfirmDeleteModal,
    onCancel,
    onSubmit
  };
}

export { useTodos };
