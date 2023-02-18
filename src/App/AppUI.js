import React from "react";
import { TodoCounter } from "../TodoCounter/TodoCounter";
import { TodoSearch } from "../TodoSearch/TodoSearch";
import { TodoList } from "../TodoList/TodoList";
import { TodoItem } from "../TodoItem/TodoItem";
import { CreateTodoButton } from "../CreateTodoButton/CreateTodoButton";
import { TodoContext } from "../TodoContext/TodoContext";
import { Modal } from "../Modal/Modal";
import { EmptyTodo } from "../EmptyTodo/EmptyTodo";
import { TodosError } from "../TodosError/TodosError";
import { TodosLoading } from "../TodosLoading/TodosLoading";
import { TodoForm } from "../TodoForm/TodoForm";
import { DeleteTodoButton } from "../DeleteTodosButton/DeleteTodoButton";
import { ConfirmDeleteAll } from "../ConfirmDeleteAll/ConfirmDeleteAll";
import { ModalDeleteAll } from "../Modal/ModalDeleteAll";

function AppUI() {
  const {
    searchedItem,
    dataStatus,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    deleteAll,
    openConfirmDeleteModal,
    setOpenConfirmDeleteModal,
  } = React.useContext(TodoContext);

  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {dataStatus.error && <TodosError error={dataStatus.error} />}
        {dataStatus.loading && <TodosLoading />}
        {!dataStatus.loading && !searchedItem.length && <EmptyTodo />}

        {searchedItem.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
            onDeleteAll={() => deleteAll()}
          />
        ))}
      </TodoList>

      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}

      {openConfirmDeleteModal && (
        <ModalDeleteAll>
          <ConfirmDeleteAll />
        </ModalDeleteAll>
      )}

      <CreateTodoButton setOpenModal={setOpenModal} />
      <DeleteTodoButton setOpenConfirmDeleteModal={setOpenConfirmDeleteModal} />
    </React.Fragment>
  );
}

export { AppUI };
