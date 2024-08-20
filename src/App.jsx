import { useState } from 'react'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'
import './App.css'

function App() {

  return (
    <div className='w-full bg-gray-900 h-screen'>
    <AddTodo />
    <Todos />
    </div>
  )
}

export default App
