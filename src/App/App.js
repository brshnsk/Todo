import React from "react";
import "./App.css"
import { useTodos } from "./useTodos";
import { TodoCounter } from "../TodoCounter/TodoCounter";
import { TodoSearch } from "../TodoSearch/TodoSearch";
import { TodoList } from "../TodoList/TodoList";
import { TodoItem } from "../TodoItem/TodoItem";
import { CreateTodoButton } from "../CreateTodoButton/CreateTodoButton";
import { Modal } from "../Modal/Modal";
import { EmptyTodo } from "../EmptyTodo/EmptyTodo";
import { TodosError } from "../TodosError/TodosError";
import { TodosLoading } from "../TodosLoading/TodosLoading";
import { TodoForm } from "../TodoForm/TodoForm";
import { DeleteTodoButton } from "../DeleteTodosButton/DeleteTodoButton";
import { ConfirmDeleteAll } from "../ConfirmDeleteAll/ConfirmDeleteAll";
import { ModalDeleteAll } from "../Modal/ModalDeleteAll";
import { TodoHeader } from "../TodoHeader/TodoHeader";
import { ChangeAlertWithStorageListener } from "../ChangeAlert/ChangeAlert";

function App() {
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
    searchValue,
    setSearchValue,
    totalItem,
    completedItem,
    addTodo,
    onCancel,
    onSubmit,
    synchronizedTodos
  } = useTodos();

  return (
    <React.Fragment>
      <TodoHeader loading={dataStatus.loading}>
        <TodoCounter 
          totalItem={totalItem} 
          completedItem={completedItem}
          />
        <TodoSearch 
          searchValue={searchValue} 
          setSearchValue={setSearchValue}
          />
      </TodoHeader>
      <TodoList
        searchText={searchValue}
        totalItem={totalItem}
        error={dataStatus.error}
        loading={dataStatus.loading}
        searchedItem={searchedItem}
        onError={() => <TodosError />}
        onLoading={() => <TodosLoading />}
        onEmptyTodo={() => <EmptyTodo />}
        onEmptySearchResults={(searchText) => (
          <p className="Test">No hay resultados para "{searchText}"</p>
        )}
        // render={(todo) => (
        //   <TodoItem
        //     key={todo.text}
        //     text={todo.text}
        //     completed={todo.completed}
        //     onComplete={() => completeTodo(todo.text)}
        //     onDelete={() => deleteTodo(todo.text)}
        //     onDeleteAll={() => deleteAll()}
        //   />
        // )}
      >
        {(todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
            onDeleteAll={() => deleteAll()}
          />
        )}
      </TodoList>

      {openModal && (
        <Modal>
          <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
        </Modal>
      )}

      {openConfirmDeleteModal && (
        <ModalDeleteAll>
          <ConfirmDeleteAll onCancel={onCancel} onSubmit={onSubmit} />
        </ModalDeleteAll>
      )}

      <CreateTodoButton setOpenModal={setOpenModal} />
      <DeleteTodoButton setOpenConfirmDeleteModal={setOpenConfirmDeleteModal} />

      <ChangeAlertWithStorageListener
        synchronize={synchronizedTodos}
      />
    </React.Fragment>
  );
}

export default App;
