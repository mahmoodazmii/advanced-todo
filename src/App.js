import React from "react";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Advanced To-Do List</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
