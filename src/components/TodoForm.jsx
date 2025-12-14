import { useState } from "react";
import SuccessMessage from "./SuccessMessage";
import { useForm } from "react-hook-form";

const TodoForm = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const [alertMessage, setAlertMessage] = useState({
    type: "", // "error", "success"
    message: "", // "Name is required"
    status: 2, // 0: success, 1: error, 2: null
  });

  const handleFormSubmit = (data) => {
    const formData = { ...data, id: crypto.randomUUID() };

    onSubmit(formData);

    // Clear the form
    reset();
  };

  return (
    <div>
      {alertMessage.status !== 2 && (
        <SuccessMessage alertMessage={alertMessage} />
      )}
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className="flex flex-col gap-4"
      >
        {/* NAME */}
        <div className="form-group flex flex-col gap-2">
          <label className="label text-neutral">Name</label>
          <input
            type="text"
            placeholder="Enter your todo"
            className="input input-neutral w-full"
            autoComplete="off"
            {...register("name", { required: true })}
          />
          {/* errors will return when field validation fails  */}
          {errors.name && <span>This field is required</span>}
        </div>
        {/* DESCRIPTION */}
        <div className="form-group">
          <label className="label text-neutral">Description</label>
          <textarea
            placeholder="Enter description"
            className="textarea textarea-neutral w-full"
            autoComplete="off"
            {...register("description", { required: true })}
          ></textarea>
          {/* errors will return when field validation fails  */}
          {errors.description && <span>This field is required</span>}
        </div>
        {/* DUE DATE */}
        <div className="form-group">
          <label className="label text-neutral">Due Date</label>
          <input
            type="date"
            className="input input-neutral w-full"
            autoComplete="off"
            {...register("dueDate", { required: true })}
          />
        </div>
        {/* PRIORITY  */}
        <div className="form-group">
          <label className="label text-neutral">Priority</label>
          <select
            className="select select-neutral w-full"
            autoComplete="off"
            {...register("priority", { required: true })}
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
