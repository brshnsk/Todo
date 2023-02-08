import React from 'react';
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch'
import { TodoList } from '../TodoList/TodoList';
import { TodoItem } from '../TodoItem/TodoItem';
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton';
import { TodoContext } from '../TodoContext/TodoContext';


function AppUI() {
  return (
    <React.Fragment>
      <TodoCounter/>
      <TodoSearch/>

      <TodoContext.Consumer>
        {({
          searchedItem,
          dataStatus,
          completeTodo,
          deleteTodo,
        }) => (
          <TodoList>

              {dataStatus.error && <p>ERROR</p>}
              {dataStatus.loading && <p>Estamos cargando...</p>}
              {(!dataStatus.loading && !searchedItem.length) && <p>Crea tu TODO!</p>}

              {searchedItem.map(todo => (
                <TodoItem
                  key={todo.text}
                  text={todo.text}
                  completed={todo.completed}
                  onComplete={() => completeTodo(todo.text)}
                  onDelete={() => deleteTodo(todo.text)}
                />
              ))}
          </TodoList>
        )}
      </TodoContext.Consumer>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export { AppUI };
