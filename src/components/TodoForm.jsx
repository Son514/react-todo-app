import { useState } from "react";
const TodoForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    dueDate: "",
    priority: "Low",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div>
      {/* TODO: Create a TodoForm to add new todo items(with state). */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* NAME */}
        <div className="form-group flex flex-col gap-2">
          <label className="label text-neutral">Name</label>
          <input
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your todo"
            className="input input-neutral"
            name="name"
          />
        </div>
        {/* DESCRIPTION */}
        <div className="form-group">
          <label className="label text-neutral">Description</label>
          <textarea
            placeholder="Enter description"
            className="textarea textarea-neutral"
            name="description"
          ></textarea>
        </div>
        {/* DUE DATE */}
        <div className="form-group">
          <label className="label text-neutral">Due Date</label>
          <input type="date" className="input input-neutral" name="dueDate" />
        </div>
        {/* PRIORITY  */}
        <div className="form-group">
          <label className="label text-neutral">Priority</label>
          <select
            defaultValue="Low"
            className="select select-neutral"
            name="priority"
          >
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </div>
        <button
          type="submit"
          className="btn btn-primary border-neutral mt-4 min-w-full"
        >
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
