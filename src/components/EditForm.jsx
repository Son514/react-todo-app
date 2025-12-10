import CheckIcon2 from "../icons/CheckIcon2";
import WrongIcon from "../icons/WrongIcon";
import { useState } from "react";
const EditForm = ({ todo, onUpdateTodo, onUndoEditing }) => {
  const [formData, setFormData] = useState({
    id: todo.id,
    name: todo.name,
    description: todo.description,
    dueDate: todo.dueDate,
    priority: todo.priority,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateTodo(formData.id, formData);
    // onEditTodo({ ...todo, ...formData }); // return updated todo
  };
  return (
    <>
      <form className="flex justify-between gap-x-5" onSubmit={handleSubmit}>
        <div className="form-group flex flex-col grow gap-2">
          <input
            type="text"
            placeholder="Edit Todo"
            className="input input-neutral input-sm"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <textarea
            placeholder="Edit Description"
            className="textarea textarea-neutral textarea-sm"
            name="description"
            value={formData.description}
            onChange={handleChange}
          ></textarea>
          <input
            type="date"
            className="input input-neutral input-sm"
            name="dueDate"
            value={formData.dueDate}
            onChange={handleChange}
          />
          <select
            className="select select-neutral select-sm"
            autoComplete="off"
            name="priority"
            value={formData.priority}
            onChange={handleChange}
          >
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </div>
        <div className="flex flex-col btn-group">
          <button className="btn btn-square btn-ghost" type="submit">
            <CheckIcon2 />
          </button>
          <button
            className="btn btn-square btn-ghost"
            type="button"
            onClick={onUndoEditing}
          >
            <WrongIcon />
          </button>
        </div>
      </form>
    </>
  );
};

export default EditForm;
