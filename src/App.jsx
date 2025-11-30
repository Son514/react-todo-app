import TodoForm from "./components/TodoForm";
import TodoLayout from "./layout/TodoLayout";
const App = () => {
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <TodoLayout>
        <TodoForm />
      </TodoLayout>
    </div>
  );
};

export default App;
