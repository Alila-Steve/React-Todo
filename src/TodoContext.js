import React, { createContext, useReducer, useEffect } from "react";

// define our initial state
const initialState = JSON.parse(localStorage.getItem('todos')) || [];

// define a reducer
const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, { text: action.text, isCompleted: false }];
    case "TOGGLE_TODO":
      return state.map((todo, index) => index === action.index ? { ...todo, isCompleted: !todo.isCompleted } : todo);
    case "REMOVE_TODO":
      return state.filter((_, index) => index !== action.index);
    default:
      return state;
  }
};

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(state));
  }, [state]);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};