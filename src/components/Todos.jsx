import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/TodoSlice'

function Todos() {
    const todos = useSelector(state => state.todos)

    const dispatch = useDispatch()
    
  return (
      <>

      {todos.map(todo => (
        <div className='flex justify-between p-3 ml-8 max-w-3xl mx-auto text-white'>  
          <div key={todo.id} > {todo.text}</div>
          <button 
          className='bg-red-500 p-2 text-white rounded-lg mr-[50px]'
          onClick={() => dispatch(removeTodo(todo.id))}
          >Delete</button>
        </div>
      ))}

      </>
  )


}

export default Todos
