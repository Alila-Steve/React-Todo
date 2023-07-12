import React, { useContext } from 'react';
import { TodoContext } from './TodoContext';
import TodoItem from './TodoItem';

const TodoList = () => {
  const { state } = useContext(TodoContext);

  return (
    <div className="todo-list">
      {state.map((todo, index) => (
        <TodoItem
          key={index}
          index={index}
          todo={todo}
        />
      ))}
    </div>
  );
}

export default TodoList;