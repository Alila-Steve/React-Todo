import React, { useState, useContext } from 'react';
import { TodoContext } from './TodoContext';
import { Form, Button } from 'react-bootstrap';

const AddTodo = () => {
  const [value, setValue] = useState("");
  const { dispatch } = useContext(TodoContext);

  const handleSubmit = event => {
    event.preventDefault();
    if (!value) return;
    dispatch({ type: "ADD_TODO", text: value });
    setValue("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control
          type="text"
          className="input"
          value={value}
          placeholder="Add todo"
          onChange={e => setValue(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default AddTodo;