import AddTask from "./components/AddTask";
import TodoList from "./components/TodoList";
import { getAllTodos } from "./api";

export default async function Home() {
  const tasks = await getAllTodos();
  console.log(tasks)
  

  return (
    <div className="text-center p-20 w-full">
    <h1 className="text-bold text-3xl mb-3">Task Management App</h1>
   <AddTask text={""}/>
   <TodoList tasks={tasks}/>
    </div>
  );
}
