const TodoForm = () => {
  return (
    <div>
      {/* TODO: Create a TodoForm to add new todo items(with state). */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col gap-4"
      >
        {/* NAME */}
        <div className="form-group flex flex-col gap-2">
          <label className="label text-neutral">Name</label>
          <input
            type="text"
            placeholder="Enter your todo"
            className="input input-neutral"
          />
        </div>
        {/* DESCRIPTION */}
        <div className="form-group">
          <label className="label text-neutral">Description</label>
          <textarea
            placeholder="Enter description"
            className="textarea textarea-neutral"
          ></textarea>
        </div>
        {/* DUE DATE */}
        <div className="form-group">
          <label className="label text-neutral">Due Date</label>
          <input type="date" className="input input-neutral" />
        </div>
        {/* PRIORITY  */}
        <div className="form-group">
          <label className="label text-neutral">Priority</label>
          <select defaultValue="Low" className="select select-neutral">
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </div>
        <button className="btn btn-primary border-neutral mt-4 min-w-full">
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
