import EditIcon from "../icons/EditIcon";
import DeleteIcon from "../icons/DeleteIcon";
const TodoList = ({ todoList, onToggleTodo }) => {
  return (
    <div>
      <ul className="list bg-base-100 rounded-box gap-4">
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
                <p className="list-col-wrap text-xs">{todo.description}</p>
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
