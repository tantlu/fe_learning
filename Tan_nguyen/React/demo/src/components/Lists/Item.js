
import status from "../../constants/status";

function Item(props) {
    const { todo } = props;
    return (
      <li className="todo-item">
        <div className="todo-content">{todo.name}</div>
        <div className={`todo-status ${status.getClass(todo.status)}`}
          onClick={(e)=> props.handleShowContextMenu(e, todo)}
        >
          {status.getDisplayName(todo.status)}
        </div>
        <div className="todo-action">
          <button
            onClick={(e) => props.handlePrepareEdit(todo)}
            className="todo-edit"
          >
            Edit
          </button>
          <button
            onClick={(e) => props.handleDelete(todo.id)}
            className="todo-delete"
          >
            Delete
          </button>
        </div>
      </li>
    );
  
}

export default Item;
