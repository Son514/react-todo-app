import { useState } from "react";
const TodoForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    id: crypto.randomUUID(),
    name: "",
    description: "",
    dueDate: "",
    priority: "Low",
    completed: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);

    // Cear the form after submission
    clearForm();
  };

  const clearForm = () => {
    setFormData({
      id: crypto.randomUUID(),
      name: "",
      description: "",
      dueDate: "",
      priority: "Low",
      completed: false,
    });
  };
  return (
    <div>
      {/* TODO: Add an alert message when a todo is added successfully */}
      {/* TODO: Create a AlertMessage component to show success message */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* NAME */}
        <div className="form-group flex flex-col gap-2">
          <label className="label text-neutral">Name</label>
          <input
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your todo"
            className="input input-neutral w-full"
            name="name"
            autoComplete="off"
          />
        </div>
        {/* DESCRIPTION */}
        <div className="form-group">
          <label className="label text-neutral">Description</label>
          <textarea
            placeholder="Enter description"
            className="textarea textarea-neutral w-full"
            name="description"
            onChange={handleChange}
            value={formData.description}
            autoComplete="off"
          ></textarea>
        </div>
        {/* DUE DATE */}
        <div className="form-group">
          <label className="label text-neutral">Due Date</label>
          <input
            type="date"
            className="input input-neutral w-full"
            name="dueDate"
            onChange={handleChange}
            value={formData.dueDate}
            autoComplete="off"
          />
        </div>
        {/* PRIORITY  */}
        <div className="form-group">
          <label className="label text-neutral">Priority</label>
          <select
            className="select select-neutral w-full"
            name="priority"
            onChange={handleChange}
            value={formData.priority}
            autcomplete="off"
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
