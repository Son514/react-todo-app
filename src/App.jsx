import TodoForm from "./components/TodoForm";
import TodoLayout from "./layout/TodoLayout";
import { useState } from "react";
import TodoList from "./components/TodoList";
const App = () => {
  // Holds the todolist items
  const [todoList, setTodoList] = useState([]);

  //State value to manage tabs | Home, Todo, About
  const [tabs, setTabs] = useState("Home");

  // State that manage editForm components
  const [editID, setEditID] = useState(0);

  const handleSubmit = (todo) => {
    setTodoList((prevTodoList) => [...prevTodoList, todo]);
  };

  const setTabsHandler = (tab) => setTabs(tab);

  const handleToggleTodo = (id) => {
    setTodoList((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const handleUpdateTodo = (id, updatedTodo) => {
    setTodoList((prev) =>
      prev.map((todo) => (todo.id === id ? updatedTodo : todo)),
    );
    handleUndoEditing();
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
          />
        )}
        {tabs === "Todo" && <TodoForm onSubmit={handleSubmit} />}
      </TodoLayout>
    </div>
  );
};

export default App;
