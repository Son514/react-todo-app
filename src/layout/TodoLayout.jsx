const TodoLayout = ({ children }) => {
  return (
    <div>
      <fieldset className="fieldset  border-neutral rounded-box w-sm border p-4">
        <legend className="fieldset-legend">My Todo</legend>
        <div role="tablist" className="tabs tabs-lift pb-3">
          <a role="tab" className="tab grow font-bold text-neutral">
            Home
          </a>
          <a
            role="tab"
            className="tab grow tab-active text-secondary font-bold"
          >
            Todo
          </a>
          <a role="tab" className="tab grow text-neutral font-bold">
            About
          </a>
        </div>
        {children}
      </fieldset>
    </div>
  );
};

export default TodoLayout;
