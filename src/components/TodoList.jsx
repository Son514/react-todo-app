import EditIcon from "../icons/EditIcon";
import DeleteIcon from "../icons/DeleteIcon";
const TodoList = ({ todoList, onToggleTodo }) => {
  const variants = {
    Low: "badge-success",
    Medium: "badge-warning",
    High: "badge-error",
  };

  return (
    // TODO: Display priority level with different colors

    // TODO: Add edit functionality

    // TODO: Add delete functionality

    // TODO: Add filtering functionality for completed and proiority levels
    <div>
      <ul className="list bg-base-100 rounded-box gap-4 min-h-[400px] max-h-[400px] overflow-auto">
        <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">
          Most played songs this week
        </li>
        {todoList.length === 0
          ? "No todos for today!"
          : todoList.map((todo) => (
              <li
                key={todo.id}
                className="list-row border border-neutral gap-y-0 items-center"
              >
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
                  {/* <p className="text-xs font-semibold opacity-60"> */}
                  {/*   Doing a full body workout with another set of chest, back, */}
                  {/* </p> */}
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
                <button className="btn btn-square btn-ghost">
                  <EditIcon />{" "}
                </button>
                <button className="btn btn-square btn-ghost">
                  <DeleteIcon />{" "}
                </button>
              </li>
            ))}
      </ul>
    </div>
  );
};

export default TodoList;
