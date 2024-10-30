import { ITask } from "./types/tasks"

const baseUrl = 'https://jsonplaceholder.typicode.com'

export const getAllTodos = async (): Promise<ITask[]> => {
const res = await fetch (`${baseUrl}/todos`, { cache: 'no-store'});
const tasks = await res.json();
return tasks
}

export const AddTodo = async (task: ITask): Promise<ITask[]> => {
    const res = await fetch(`${baseUrl}/todos/{id}`, {
        method: 'POST',
        headers: {
            "Content-Type" : "application/json" 
        },
        body: JSON.stringify(task)
    })
    const newTask = await res.json();
    return newTask();
}