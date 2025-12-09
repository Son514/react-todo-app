import TodoForm from "./components/TodoForm";
import TodoLayout from "./layout/TodoLayout";
import { useState } from "react";
import TodoList from "./components/TodoList";
const App = () => {
  // State value that manage the list of todos
  const [todoList, setTodoList] = useState([]);

  //State value that manage tabs | Home, Todo, About
  const [tabs, setTabs] = useState("Home");

  // State value that manage editForm components
  const [editID, setEditID] = useState(0);

  // Handles the creation of a new todo items
  const handleSubmit = (todo) => {
    setTodoList((prevTodoList) => [...prevTodoList, todo]);
  };

  // Toggles between home, todo and about tabs
  const setTabsHandler = (tab) => setTabs(tab);

  // Toggles the checkbox for todo completed status
  const handleToggleTodo = (id) => {
    setTodoList((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  // Handles the update of todo item
  const handleUpdateTodo = (id, updatedTodo) => {
    setTodoList((prev) =>
      prev.map((todo) => (todo.id === id ? updatedTodo : todo)),
    );
    handleUndoEditing();
  };

  // Handles the deletion of todo item
  const handleDeleteTodo = (id) => {
    setTodoList((prev) => prev.filter((todo) => todo.id !== id));
  };

  // Undo the editing phase
  const handleUndoEditing = () => setEditID(0);

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <TodoLayout tabs={tabs} onTab={setTabsHandler}>
        {tabs === "Home" && (
          <TodoList
            todoList={todoList}
            onToggleTodo={handleToggleTodo}
            onUpdateTodo={handleUpdateTodo}
            editID={editID}
            setEditID={setEditID}
            onUndoEditing={handleUndoEditing}
            onDeleteTodo={handleDeleteTodo}
          />
        )}
        {tabs === "Todo" && <TodoForm onSubmit={handleSubmit} />}
      </TodoLayout>
    </div>
  );
};

export default App;
