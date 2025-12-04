const TodoLayout = ({ children, tabs, onTab }) => {
  return (
    <div>
      <fieldset className="fieldset  border-neutral rounded-box w-sm border p-4 min-h-[520px]">
        <legend className="fieldset-legend">My Todo</legend>
        <div role="tablist" className="tabs tabs-lift pb-3">
          <a
            role="tab"
            className={`tab grow ${tabs === "Home" ? "tab-active text-secondary" : "text-neutral"} font-bold`}
            onClick={() => onTab("Home")}
          >
            Home
          </a>
          <a
            role="tab"
            className={`tab grow ${tabs === "Todo" ? "tab-active text-secondary" : "text-neutral"} font-bold`}
            onClick={() => onTab("Todo")}
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
