import { Component, useState } from "react";
import status from "../../constants/status";
import Item from "./Item";

const List = ({
  todos,
  handlePrepareEdit,
  handleDelete,
  handleSaveTodo,
}) => {
  console.log(todos);

  const initContext = {
    top: 0,
    left: 0,
    visibility: "hidden",
  };
  const initTodo = {
    id: undefined,
    status: 0,
    name: "",
  };
  const [context, setContext] = useState(initContext);
  const [todoState, setTodoState] = useState(initTodo);
  const handleShowContextMenu = (e, todo) => {
    setContext({
      ...context,
      top: e.clientY,
      left: e.clientX,
      visibility: "visible",
    });
    setTodoState({
        ...todoState,
        ...todo,
    });
  };

  const hanldCloseContexMenu = () => {
    setContext({
      ...context,
      ...initContext,
    });
    setTodoState({
      ...todoState,
      ...initTodo,
    });
  };

  const handleSaveStatusTodo = (status) => {
    setContext({
      ...context,
      visibility: " hidden",
    });
    handleSaveTodo({
      ...todoState,
      status: status,
    });
  };
  console.log(todos);
  return (
    <>
      <ul>
        {todos.map((todo, key) => {
          return (
            <Item
              todo={todo}
              key={key}
              handlePrepareEdit={handlePrepareEdit}
              handleDelete={handleDelete}
              handleShowContextMenu={handleShowContextMenu}
            />
          );
        }
      )}
      </ul>

      <div
        className={`status-context-cover ${context.visibility} `}
        onClick={() => hanldCloseContexMenu()}
      ></div>

      <div
        className={`status-context-menu ${context.visibility} `}
        style={{
          top: `${context.top}px`,
          left: `${context.left}px`,
          transform: `${
            window.innerHeight - context.top <= 150 ? "translateY(-100%)" : ""
          }`,
        }}
      >
        <button
          onClick={() => handleSaveStatusTodo(status.TODO)}
          className={`todo-status todo`}
        >
          Todo
        </button>
        <button
          onClick={() => handleSaveStatusTodo(status.PROCESS)}
          className={`todo-status process`}
        >
          Procepssing
        </button>
        <button
          onClick={() => handleSaveStatusTodo(status.COMPLETED)}
          className={`todo-status completed`}
        >
          Completed
        </button>
      </div>
    </>
  );
};

export default List;
