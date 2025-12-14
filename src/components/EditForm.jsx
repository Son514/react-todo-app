import CheckIcon2 from "../icons/CheckIcon2";
import WrongIcon from "../icons/WrongIcon";
import { useState } from "react";
import { useForm } from "react-hook-form";

const EditForm = ({ todo, onUpdateTodo, onUndoEditing }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      id: todo.id,
      name: todo.name,
      description: todo.description,
      dueDate: todo.dueDate,
      priority: todo.priority,
    },
  });

  const handleFormSubmit = (formData) => {
    onUpdateTodo(formData.id, formData);
  };
  return (
    <>
      <form
        className="flex justify-between gap-x-5"
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        <div className="form-group flex flex-col grow gap-2">
          <input
            type="text"
            placeholder="Edit Todo"
            className="input input-neutral input-sm"
            {...register("name", { required: true })}
          />
          <textarea
            placeholder="Edit Description"
            className="textarea textarea-neutral textarea-sm"
            {...register("description", { required: true })}
          ></textarea>
          <input
            type="date"
            className="input input-neutral input-sm"
            {...register("dueDate", { required: true })}
          />
          <select
            className="select select-neutral select-sm"
            autoComplete="off"
            {...register("priority", { required: true })}
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
