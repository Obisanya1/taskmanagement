"use client"
import React, { FormEventHandler, useState } from 'react'

const AddTask = (p0: { text: string }) => {
  const [showForm, setShowForm] = useState(false)
  const [newTaskValue, setNewTaskValue] = useState<string>("")

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e)=> {
    e.preventDefault()
    await AddTask ({
      text: newTaskValue,
    })
    setShowForm(!showForm)
    setNewTaskValue("")
  }

  return (
    <div>
     <button className='bg-blue-700 text-white p-5 w-full' onClick={()=> setShowForm(!showForm)}> Add Task</button>
     {showForm && <form>
      <input
        type='text'
        placeholder='Type new task here'
        className='border-2 border-black text-2xl mt-3 w-full'
        value={newTaskValue}
        onChange={e => setNewTaskValue(e.target.value)}
        />
        <button className='bg-green-800 text-white font-semibold rounded-xl px-16 p-3 mt-3 flex justify-start' type='button' onClick={()=> handleSubmit}>Submit</button>
      </form>}
    </div>
  )
}

export default AddTask
