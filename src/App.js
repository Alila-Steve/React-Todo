import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { TodoProvider } from './TodoContext';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';

const App = () => {
  return (
    <TodoProvider>
      <Router>
        <div className="container">
          <Navbar bg="light" expand="lg">
            <Navbar.Brand as={Link} to="/">Todo App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link as={Link} to={'/'}>Todos</Nav.Link>
                <Nav.Link as={Link} to={'/add'}>Add Todo</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Routes>
            <Route path="/" element={<TodoList />} />
            <Route path="/add" element={<AddTodo />} />
          </Routes>
        </div>
      </Router>
    </TodoProvider>
  );
}

export default App;