import React from 'react'
import { ITask } from '../types/tasks'

interface TaskListProps {
    tasks: ITask[]
}

const TodoList: React.FC<TaskListProps> = ({tasks}) => {
  return (
    <div className='w-full mt-3'>
    <table className="table-fixed">
  <thead>
    <tr className='bg-slate-300'>
      <th>Name</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    {tasks.map((task)=> {
        return (
            <tr key={task.id} className='bg-slate-200 py-15 px-5 rounded-xl border-2 border-blue-800'>
                <td>{task.title} </td>
                <td>{task.completed.toString()} </td>
            </tr>
        )
    })}
  </tbody>

</table>
    </div>
  )
}

export default TodoList
