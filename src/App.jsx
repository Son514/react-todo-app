import TodoForm from "./components/TodoForm";
import TodoLayout from "./layout/TodoLayout";
import { useState } from "react";
const App = () => {
  const [newTodo, setNewTodo] = useState({});
  const handleSubmit = (todo) => {
    console.log("Form Data: ", todo);

    setNewTodo(todo);
  };
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <TodoLayout>
        <TodoForm onSubmit={handleSubmit} />
      </TodoLayout>
    </div>
  );
};

export default App;
