import EditIcon from "../icons/EditIcon";
import DeleteIcon from "../icons/DeleteIcon";
const TodoList = ({ todoList }) => {
  // TODO: Create a TodoList to view todos(with state).
  return (
    <div>
      <ul className="list bg-base-100 rounded-box shadow-md">
        <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">
          Most played songs this week
        </li>
        {/* TODO: Replace with checkbox, dynamic todolist and buttons! */}
        {todoList.map((todo, index) => (
          <li key={index} className="list-row">
            <div>
              <input type="checkbox" className="checkbox border-neutral" />
            </div>
            <div>
              <div className="uppercase">Going to the gym</div>
              <p className="text-xs font-semibold opacity-60 truncate">
                {/* Doing a full body workout with another set of chest, back, */}
                shoulder for overloading.
              </p>
            </div>
            <p className="list-col-wrap text-xs">
              {/* Going to the gym at least 3 times a week to stay healthy. */}
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
