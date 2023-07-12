import React, { useContext } from 'react';
import { TodoContext } from './TodoContext';
import { Button } from 'react-bootstrap';

const TodoItem = ({ todo, index }) => {
  const { dispatch } = useContext(TodoContext);
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.text}

      <div>
        <Button variant="success" onClick={() => dispatch({ type: "TOGGLE_TODO", index })}>Complete</Button>
        <Button variant="danger" onClick={() => dispatch({ type: "REMOVE_TODO", index })}>x</Button>
      </div>
    </div>
  );
}

export default TodoItem;