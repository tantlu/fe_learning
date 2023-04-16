import React, { useState } from "react";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [inputData, setInputData] = useState("");

  const handleInputChange = (e) => {
    setInputData(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputData.trim() !== "") {
      setTodos([...todos, { text: inputData, done: false }]);
      setInputData("");
    }
  };

  const handleToggleDone = (index) => {
    setTodos(
      todos.map((todo, i) => {
        if (i === index) {
          return { ...todo, done: !todo.done };
        }
        return todo;
      })
    );
  };

  const handleButtonClick = (index) => {
    handleToggleDone(index);
  };

  return (
    <div>
      <h1>Todo App</h1>
      <input
        type="text"
        value={inputData}
        onChange={handleInputChange}
        placeholder="Enter a todo"
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map((todo, index) => (
          <li
            key={index}
            style={{ textDecoration: todo.done ? "line-through" : "none" }}>
            {todo.text}
            <button onClick={() => handleButtonClick(index)}>
              {todo.done ? "Mark as Not Done" : "Mark as Done"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
