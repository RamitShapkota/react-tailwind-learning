import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'

function AddTodo() {
  const [input, setInput] = useState('')
  const dispatch = useDispatch()

  const addTodoHandler = (e) => {
    e.preventDefault()
    if(input.length>0)
    dispatch(addTodo(input))
    setInput('')
  }

  return (
    <form
      onSubmit={addTodoHandler}
      className="max-w-2xl mx-auto mt-10 flex items-center gap-3 bg-zinc-900 p-5 rounded-2xl shadow-lg"
    >
      <input
        type="text"
        className="flex-1 bg-zinc-800 border border-zinc-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-gray-100 rounded-xl py-2.5 px-4 outline-none transition-all duration-200 placeholder:text-zinc-400"
        placeholder="Enter a todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button
        type="submit"
        className="text-white bg-indigo-500 hover:bg-indigo-600 active:scale-95 transition-all duration-150 py-2.5 px-6 rounded-xl font-medium shadow"
      >
        Add Todo
      </button>
    </form>
  )
}

export default AddTodo
