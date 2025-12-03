import TodoForm from "./components/TodoForm";
import TodoLayout from "./layout/TodoLayout";
import { useState } from "react";
import TodoList from "./components/TodoList";
const App = () => {
  // Holds the todolist items
  const [todoList, setTodoList] = useState([]);

  const handleSubmit = (todo) => {
    setTodoList((prevTodoList) => [...prevTodoList, todo]);
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <TodoLayout>
        <TodoList todoList={todoList} />
        <TodoForm onSubmit={handleSubmit} />
      </TodoLayout>
    </div>
  );
};

export default App;
