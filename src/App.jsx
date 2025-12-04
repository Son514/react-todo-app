import TodoForm from "./components/TodoForm";
import TodoLayout from "./layout/TodoLayout";
import { useState } from "react";
import TodoList from "./components/TodoList";
const App = () => {
  // Holds the todolist items
  const [todoList, setTodoList] = useState([]);

  //State value to manage tabs | Home, Todo, About
  const [tabs, setTabs] = useState("Home");

  const handleSubmit = (todo) => {
    setTodoList((prevTodoList) => [...prevTodoList, todo]);
  };

  const setTabsHandler = (tab) => setTabs(tab);

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <TodoLayout tabs={tabs} onTab={setTabsHandler}>
        {tabs === "Home" && <TodoList todoList={todoList} />}
        {tabs === "Todo" && <TodoForm onSubmit={handleSubmit} />}
      </TodoLayout>
    </div>
  );
};

export default App;
