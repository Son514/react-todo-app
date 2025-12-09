import EditIcon from "../icons/EditIcon";
import DeleteIcon from "../icons/DeleteIcon";

const ListItems = ({ todo, onToggleTodo, setEditID, onDeleteTodo }) => {
  const variants = {
    Low: "badge-success",
    Medium: "badge-warning",
    High: "badge-error",
  };

  return (
    <>
      <div>
        <input
          type="checkbox"
          className="checkbox border-neutral"
          checked={todo.completed}
          onChange={() => onToggleTodo(todo.id)}
        />
      </div>
      <div>
        <div
          className={`uppercase ${todo.completed ? "line-through opacity-50" : ""} font-bold`}
        >
          {todo.name}
        </div>
      </div>
      <p className="list-col-wrap text-xs">
        {todo.description}
        <br />
        <span className="mr-1">{todo.dueDate}</span>
        <span
          className={`badge ${variants[todo.priority]} badge-outline badge-xs`}
        >
          {todo.priority}
        </span>
      </p>
      <button
        className="btn btn-square btn-ghost"
        onClick={() => setEditID(todo.id)}
      >
        <EditIcon />
      </button>
      <button
        className="btn btn-square btn-ghost"
        onClick={() => onDeleteTodo(todo.id)}
      >
        <DeleteIcon />
      </button>
    </>
  );
};

export default ListItems;
