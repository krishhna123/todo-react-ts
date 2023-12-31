import React, { useState } from "react";
import ToDoList from "./components/ToDoList";
import NewToDo from "./components/NewToDo";
import { ToDo } from "./components/todo.model";

function App() {
  const [todos, setTodos] = useState<ToDo[]>([]);

  const todoAddHandler = (text: string) => {
    setTodos((prevToDos) => [
      ...prevToDos,
      { id: Math.random().toString(), text: text },
    ]);
  };

  const toDoDeleteHandler = (toDoId: string) => {
    setTodos((prevToDos) => {
      return prevToDos.filter((todo) => todo.id !== toDoId);
    });
  };
  return (
    <div className="App">
      <h1>TODO List</h1>
      <NewToDo onAddToDo={todoAddHandler} />
      <ToDoList onDeleteDoTo={toDoDeleteHandler} items={todos} />
    </div>
  );
}

export default App;
