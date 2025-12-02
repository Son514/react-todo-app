import TodoForm from "./components/TodoForm";
import TodoLayout from "./layout/TodoLayout";
import { useState } from "react";
const App = () => {
  const [newTodo, setNewTodo] = useState({});
  const handleSubmit = (todo) => {
    console.log("Form Data: ", todo);

    // TODO: Add onchange to all the fields in the form to update the state. use AI as much as possible
    // TODO: Insert the formData to the newTodo state
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
