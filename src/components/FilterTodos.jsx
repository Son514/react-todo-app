const FilterTodos = ({ setStatusFilter, setPriorityFilter }) => {
  return (
    <div>
      <fieldset className="fieldset flex">
        <legend className="fieldset-legend">Filters</legend>
        <select
          defaultValue="Select a status"
          className="select select-sm select-neutral focus:outline-none focus:ring-0 focus:shadow-none"
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option disabled={true}>Select a status</option>
          <option>All</option>
          <option>Active</option>
          <option>Completed</option>
        </select>
        <select
          defaultValue="Select a priority"
          className="select select-sm select-neutral"
          onChange={(e) => setPriorityFilter(e.target.value)}
        >
          <option disabled={true}>Select a priority</option>
          <option>All</option>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>
      </fieldset>
    </div>
  );
};

export default FilterTodos;
