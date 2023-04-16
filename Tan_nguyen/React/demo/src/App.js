import { Component, useEffect, useState } from "react";
import todoApi from "./api/todoApi";
import "./App.css";
import Form from "./components/Form";
import List from "./components/Lists";

function App() {
  const initTodo = { id: undefined, name: "", status: undefined };
  const [todo, setTodo] = useState(initTodo)
  const [todos, setTodos] = useState([initTodo])

  const renderData = (todoParam) => {
    const response = todoApi.get();
    setTodos([
      ...response,
    ]);
  };
  useEffect(() => {
    renderData();
  }, []);

  const handleSaveTodo = (todo) => {
    todoApi.save({ ...todo, status: todo.status ?? 0 });
    if (todo.id === undefined) {
      todo = { ...initTodo };
    }
    //render
    renderData({ ...initTodo });
  };

  const handlePrepareEdit = (todoParam) => {
    setTodo({
      ...todo,
      ...todoParam,
    });
  };
  const handleDelete = (id) => {
    todoApi.delete(id);
    renderData();
  };

  return (
    <div className="App">
      <div className="title">
        <h1>Todo List</h1>
      </div>
      <div className="todo-list">
        <Form handleSaveTodo={handleSaveTodo} todo={todo} />
        <List
          todos={todos}
          handlePrepareEdit={handlePrepareEdit}
          handleDelete={handleDelete}
          handleSaveTodo={handleSaveTodo}
        />
      </div>
    </div>
  );
}
export default App;
