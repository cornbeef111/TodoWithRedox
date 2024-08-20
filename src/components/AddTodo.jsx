import React from 'react'
import {useDispatch} from 'react-redux'
import { addTodo } from '../features/todo/TodoSlice'

function AddTodo() {

    const [input, setInput] = React.useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }
  return (
    <div className='w-full'>
        <form onSubmit={addTodoHandler} 
                className=' w-full p-8 flex justify-between max-w-3xl mx-auto'>
            <input 
            placeholder='Enter a todo ...'
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className=' bg-transparent border outline-none text-white rounded-md p-2'
            />

            <button type='submit' 
            className='bg-black/50 p-2 rounded-lg text-white border hover:opacity-50'>Add Todo</button>
            
        </form>
    </div>
  
  )
}

export default AddTodo
