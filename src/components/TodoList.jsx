import { useState } from "react";
import EditIcon from "../icons/EditIcon";
import DeleteIcon from "../icons/DeleteIcon";
import EditForm from "./EditForm";
import ListItems from "./ListItems";

const TodoList = ({
  todoList,
  onToggleTodo,
  editID,
  setEditID,
  onUndoEditing,
  onUpdateTodo,
  onDeleteTodo,
}) => {
  return (
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
                className={`list-row ${editID === todo.id && "grid-cols-1"} border border-neutral gap-y-0 items-center`}
              >
                {editID === todo.id ? (
                  <EditForm
                    todo={todo}
                    onUpdateTodo={onUpdateTodo}
                    onUndoEditing={onUndoEditing}
                  />
                ) : (
                  <ListItems
                    todo={todo}
                    onToggleTodo={onToggleTodo}
                    setEditID={setEditID}
                    onDeleteTodo={onDeleteTodo}
                  />
                )}
              </li>
            ))}
      </ul>
    </div>
  );
};

export default TodoList;
